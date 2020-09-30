const mongoose = require('mongoose');
const connection = require('../libs/connection');
const jwt = require('jsonwebtoken');
const config = require('../config');
//const uuid = require('uuid/v4');
const {v4: uuidv4} = require('uuid');

const sessionsSchema = new mongoose.Schema({

    refreshToken: {
        type: String,
        unique: true,
        //required: true,
    },
    lastVisit: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users',
    },
});

sessionsSchema.path('lastVisit').index({expires: '1d'});


function generateRefreshToken() {
    return new Promise((resolve, reject) => {
        const token = uuidv4()
        resolve(token)
    })
}


function generateAccessToken(sessionId) {
    return new Promise((resolve, reject) => {
        let expiresDate = new Date()
        expiresDate.setHours(expiresDate.getHours() + 1)
        const payload = {
            sessionId: sessionId,
            expires: expiresDate
        };
        resolve(jwt.sign(payload, config.jwtSecretKey));
    })
}

sessionsSchema.methods.generateAndSetTokens = async function () {
    const refreshToken = await generateRefreshToken()
    const accessToken = await generateAccessToken(this._id)
    this.refreshToken = refreshToken
    return {
        refreshToken: refreshToken,
        accessToken: accessToken
    }
}


module.exports = connection.model('Sessions', sessionsSchema);
