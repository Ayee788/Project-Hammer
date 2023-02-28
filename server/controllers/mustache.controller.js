const Mustache = require('../models/mustache.model');


module.exports.findAllMustaches = (req, res) => {
    Mustache.find()
        .then((mustaches) => {
            res.json(mustaches)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.findOneSingleMustache = (req, res) =>{
    Mustache.findOne({_id: req.params.id})
        .then(oneMustache =>{
            res.json(oneMustache)
        })
        .catch((err) =>{
            res.status(400).json(err)
        });
}

module.exports.createMustache = (req, res) =>{
    Mustache.create(req.body)
        .then(newMustache =>{
            res.json(newMustache)
        })
        .catch((err) =>{
            res.status(400).json(err)
        });
}

module.exports.updateExistingMustache = (req, res) =>{
    Mustache.findOneAndUpdate(
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
    Mustache.deleteOne({_id: req.params.id})
        .then(result =>{
            res.json(result)
        })
        .catch((err) =>{
            res.status(400).json(err)
        });
}
