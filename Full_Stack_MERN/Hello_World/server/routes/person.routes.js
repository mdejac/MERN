const PersonController = require('../controllers/person.controller');

module.exports = app => {
    app.get('/api', PersonController.index);
    app.get('/api/people', PersonController.getAllPersons);
    app.get('/api/people/:id', PersonController.getPerson);
    app.post('/api/people', PersonController.createPerson);
    app.patch('/api/people/:id', PersonController.updatePerson);
    app.delete('/api/people/:id', PersonController.deletePerson);
}