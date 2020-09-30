const webpack = require('webpack');

module.exports = function () {

    return {
        plugins: [
            new webpack.HashedModuleIdsPlugin({ // использует хэш вместо id
                hashFunction: 'md4',
                hashDigest: 'base64',
                hashDigestLength: 8
            })
        ]

    };
};