const mongoose = require('mongoose');
const Movies = require('../movies/movieModel')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    movies: {
        type: mongoose.Schema.Types.ObjectId,
        ref: `${Movies}`,
        unique: false
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User