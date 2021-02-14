const mongoose = require('mongoose');
const connection = require('../libs/connection');
const crypto = require('crypto');
const config = require('../config')

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
    }

});

function generateSalt() {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(config.crypto.length, (err, buffer) => {
            if (err) return reject(err);
            resolve(buffer.toString('hex'));
        });
    });
}

function generatePassword(salt, password) {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(
            password, salt,
            config.crypto.iterations,
            config.crypto.length,
            config.crypto.digest,
            (err, key) => {
                if (err) return reject(err);
                resolve(key.toString('hex'));
            }
        );
    });
}

usersSchema.methods.checkPassword = async function (password) {
    if (!password) return false;
    const hash = await generatePassword(this.salt, password);
    return hash === this.password;
};

usersSchema.methods.setPassword = async function setPassword(password) {
    this.salt = await generateSalt();
    this.password = await generatePassword(this.salt, password);
};

module.exports = connection.model('Users', usersSchema);
