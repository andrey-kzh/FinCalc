const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function () {

    return {
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css" //имя получаем из splitChunks
            })
        ]

    };
};
