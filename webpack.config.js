
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const sassPlugin = new ExtractTextPlugin({
    filename: "./output/style.css"
});


const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    template: 'index.html'
});

/*
//for jquery
const webpack = require("webpack");
const jqueryPlugin = new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
    filename: "./output/style.css"
});
//then add jqueryPlugin to plugins array
*/

module.exports = {
    plugins: [
        htmlPlugin,
        sassPlugin
    ],
    devServer: {
        contentBase: [ './' ],
        watchContentBase: true
    },
    resolve: {
       extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            },
            {
                test: /\.(html)$/,
                use: 'html-loader'
            },
            {
              test: /\.ts$/,
              use: 'ts-loader'
            }
      ]
    }
};
