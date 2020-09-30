const mongoose = require('mongoose');
const connection = require('../libs/connection');
const crypto = require('crypto');

const usersSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: 'Login is already taken',
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        //required:true,
    }

});

usersSchema.methods.checkPassword = async function(password) {
    if (!password) return false;
    return password === this.password;
};

usersSchema.methods.generateSalt = async function() {
    return null;
};

usersSchema.methods.generatePassword = async function() {
    return null;
};

module.exports = connection.model('Users', usersSchema);
