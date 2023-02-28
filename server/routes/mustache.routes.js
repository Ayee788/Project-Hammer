const MustacheController = require('../controllers/mustache.controller');

module.exports = app =>{
    app.get('/api/mustache', MustacheController.findAllMustaches);
    app.post('/api/mustache', MustacheController.createMustache);
    app.get('/api/mustache/:id', MustacheController.findOneSingleMustache);
    app.put('/api/mustache/:id', MustacheController.updateExistingMustache);
    app.delete('/api/mustache/:id', MustacheController.deleteAnExistingMustache);
}