const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function () {
    return {
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {from: 'src/img', to: 'img'},
                    {from: 'src/fonts', to: 'fonts'}
                ]
            })
        ]
    };
};
