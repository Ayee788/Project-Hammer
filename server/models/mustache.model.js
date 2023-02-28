const mongoose = require('mongoose');

const MustacheSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: [true, "{PATH} url is required."],
        },
    },
    {timestamps: true})

const Mustache = mongoose.model("Mustache", MustacheSchema);

module.exports = Mustache;