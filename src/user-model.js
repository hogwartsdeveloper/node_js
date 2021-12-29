const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    name: String,
    password: String,
});

module.exports = mongoose.model('User', userScheme)