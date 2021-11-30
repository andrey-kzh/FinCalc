const local = require('./local')

module.exports = {
    mongodb: {
        uri: local.mongodb.uri,
        options: {
            user: local.mongodb.user,
            pass: local.mongodb.pass,
        }
    },
    jwtSecretKey: local.jwtSecretKey,
    crypto: {
        iterations: 12000,
        length: 128,
        digest: 'sha512',
    }
}