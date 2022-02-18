// Importing mongoose
const mongoose = require('mongoose');

// Defining new movie schema
const movieSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    }
})

// creating new movie collection using movieSchema
const Movie = mongoose.model('Movies', movieSchema);

module.exports = Movie;