module.exports = function () {
    return {
        module: {
            rules: [
                {
                    //Babel
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: ["@babel/plugin-transform-runtime", "@babel/plugin-transform-regenerator", "@babel/plugin-syntax-dynamic-import"]
                        }
                    }
                }
            ]
        }
    };
};
