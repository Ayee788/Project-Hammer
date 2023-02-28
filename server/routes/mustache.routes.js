const MustacheController = require('../controllers/mustache.controller');

module.exports = app =>{
    app.get('/api/mustaches', MustacheController.findAllMustaches);
    app.post('/api/mustaches', MustacheController.createMustache);
    app.get('/api/mustaches/:id', MustacheController.findOneSingleMustache);
    app.put('/api/mustaches/:id', MustacheController.updateExistingMustache);
    app.delete('/api/mustaches/:id', MustacheController.deleteAnExistingMustache);
}