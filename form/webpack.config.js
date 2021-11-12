const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(), //  абсолютный путь к общей папке(к примеру: (__dirname, 'src')) и в entry можно не указывать этот путь
    mode: 'development',
    entry: {
        main: './js/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve (__dirname, 'dist')
    }, 
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ('style-loader', 'css-loader')
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot)$/,
                use: ['url-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /'node_modules'/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ] 
    }
}