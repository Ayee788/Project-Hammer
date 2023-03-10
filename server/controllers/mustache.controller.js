const Mustaches = require('../models/mustache.model');


module.exports.findAllMustaches = (req, res) => {
    Mustaches.find()
        .then((mustaches) => {
            res.json(mustaches)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.findOneSingleMustache = (req, res) =>{
    Mustaches.findOne({_id: req.params.id})
        .then(oneMustache =>{
            res.json(oneMustache)
        })
        .catch((err) =>{
            res.status(400).json(err)
        });
}

module.exports.createMustache = (req, res) =>{
    Mustaches.create(req.body)
        .then(newMustache =>{
            res.json(newMustache)
        })
        .catch((err) =>{
            res.status(400).json(err)
        });
}

module.exports.updateExistingMustache = (req, res) =>{
    Mustaches.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true})
        .then(updatedMustache =>{
            res.json(updatedMustache)})
        .catch((err) =>{
            res.status(400).json(err)
        });
}

module.exports.deleteAnExistingMustache = (req, res) =>{
    Mustaches.deleteOne({_id: req.params.id})
        .then(result =>{
            res.json(result)
        })
        .catch((err) =>{
            res.status(400).json(err)
        });
}
