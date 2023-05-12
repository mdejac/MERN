const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    app.post('/api/players', PlayerController.create);
    app.get('/api/players', PlayerController.getAll);
    app.get('/api/players/:id', PlayerController.getOne);
    app.patch('/api/players/:id/edit', PlayerController.update);
    app.delete('/api/players/:id', PlayerController.delete);
    app.patch('/api/players/:id/status', PlayerController.updateStatus);
}