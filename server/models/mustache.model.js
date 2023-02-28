const mongoose = require('mongoose');

const MustacheSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: [true, "{PATH} is a required field."],
            minlength: [3, "{PATH} must be {MINLENGTH} characters long."]
        },
    },
    {timestamps: true})

const Mustache = mongoose.model("Mustache", MustacheSchema);

module.exports = Mustache;