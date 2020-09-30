const path = require("path");
const {merge} = require('webpack-merge');

//плагины
const CleanWebpackPlugin = require('./webpack/plugins/CleanWebpackPlugin');
const DefinePlugin = require('./webpack/plugins/DefinePlugin');
const HashedModuleIdsPlugin = require('./webpack/plugins/HashedModuleIdsPlugin');
const HtmlWebpackPlugin = require('./webpack/plugins/HtmlWebpackPlugin');
const MiniCssExtractPlugin = require('./webpack/plugins/MiniCssExtractPlugin');
const OptimizeCssAssetsPlugin = require('./webpack/plugins/OptimizeCssAssetsPlugin');
const CopyWebpackPlugin = require('./webpack/plugins/CopyWebpackPlugin');

//модули
const babelLoader = require('./webpack/modules/babelLoader');
const cssLoader = require('./webpack/modules/cssLoader');

//переменные
const env = process.env.NODE_ENV;
const isDev = (env !== 'production');
const rootFolder = __dirname;
const targetFolder = isDev ? "dist" : "prod";
const modeVal = isDev ? 'development' : 'production';
const devtoolVal = isDev ? 'source-map' : '';

//-------------------------------------------------


const common = merge([
    {
        mode: modeVal,
        devtool: devtoolVal, //source map только для разработки
        entry: {main: path.resolve(rootFolder, 'src', 'index.js')},
        output: {
            filename: "[name].proj.js",
            chunkFilename: '[name].proj.js',
            path: path.resolve(rootFolder, targetFolder),
            publicPath: '/' //for react router
        },

//Общий код
        optimization: {
            runtimeChunk: true,
            splitChunks: {
                name: 'bundle',
                chunks: 'all',
                cacheGroups: {
                    styles: { //объедение чанков css в один файл
                        test: /\.css$/,
                        name: 'style',
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        }

    },
//Общие модули и плагины
    CopyWebpackPlugin(),
    babelLoader(),
    cssLoader(),
    CleanWebpackPlugin(),
    DefinePlugin(isDev),
    HashedModuleIdsPlugin(),
    HtmlWebpackPlugin(),
    MiniCssExtractPlugin(),
]);


//-------------------------------------------------


const devServer = merge([{
    //historyApiFallback for react router
    devServer: {
        contentBase: path.resolve(rootFolder, targetFolder),
        historyApiFallback: true,
    }
}]);


//-------------------------------------------------


module.exports = function () {

    console.log(env);

    switch (env) {

        case 'development':
            return merge([
                common
            ]);

        case 'production':
            return merge([
                common,
                OptimizeCssAssetsPlugin() //сжать css
            ]);

        default:
            return merge([
                common,
                devServer
            ]);
    }
};
