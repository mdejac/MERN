const Player = require('../models/player.model');

module.exports = {
    create: (req, res) => {
        Player.create(req.body)
        .then(player => res.status(201).json(player))
        .catch(err => res.status(400).json(err));
    },

    getAll: (req, res) => {
        Player.find()
            .then(data => res.json(data))
            .catch(err => res.status(400).json(err));
    },

    getOne: (req, res) => {
        Player.findById({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.status(400).json(err));
    },

    update: (req,res) => {
        Player.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then(data => res.json(data))
            .catch(err => res.status(400).json(err));
    },

    updateStatus: (req, res) => {
        Player.findById({_id:req.params.id})
            .then(data => {
                const index = data.gamesStatus.findIndex(el => el.game == req.body.game);
                if (index === -1) {
                    data.gamesStatus.push({game:req.body.game, status:req.body.status})
                } else {
                    data.gamesStatus[index].status = req.body.status;
                }
                return data.save({runValidators:true});
            })
            .then(data => res.json(data))
            .catch(err => res.status(400).json(err));
    },

    delete: (req, res) => {
        Player.findByIdAndDelete({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.status(400).json(err));
    }
}