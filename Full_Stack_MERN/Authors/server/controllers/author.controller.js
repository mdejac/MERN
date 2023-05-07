const Author = require('../models/author.model');

module.exports = {
    createAuthor: (req, res) => {
        Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
    },

    getAllAuthors: (req, res) => {
        Author.find()
            .then(authors => res.json(authors))
            .catch(err => res.json(err));
    },

    getOneAuthor: (req, res) => {
        Author.findById({_id: req.params.id})
            .then(authors => res.json(authors))
            .catch(err => res.json(err));
    },

    updateAuthor: (req,res) => {
        Author.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err));
    },

    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete({_id: req.params.id})
            .then(author => res.json(author))
            .catch(err => res.json(err));
    }
}