const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    rating: { type: Number, required: true },
    releaseDate: { type: Date },
    duration: { type: Number }
});

module.exports = mongoose.model("Movie", MovieSchema);
