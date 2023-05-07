const Person = require('../models/person.model');

module.exports = {

    index: (req, res) => {
        res.json({message: 'Hello World!!'});
    },

    createPerson: (req, res) => {
        Person.create(req.body)
            .then(person => res.json(person))
            .catch(err => res.json(err));
    },

    getAllPersons: (req, res) => {
        Person.find()
            .then(persons => res.json(persons))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },

    getPerson: (req, res) => {
        Person.findById({_id: req.params.id})
            .then(person => res.json(person))
            .catch(err => res.json(err));
    },

    updatePerson: (req, res) => {
        Person.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true, runValidators: true})
            .then(person => res.json(person))
            .catch(err => res.json(err));
    },
    
    deletePerson: (req, res) => {
        Person.findByIdAndDelete({_id: req.params.id})
            .then(person => res.json(person))
            .catch(err => res.json(err));
    }
}