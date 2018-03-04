
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const sassPlugin = new ExtractTextPlugin({
    filename: "./output/style.css",
    disable: process.env.NODE_ENV === "development"
});

const webpack = require("webpack");
const jqueryPlugin = new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
});

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    title: 'Markdown Stylizer',
    template: 'output.html',
    inject: 'body'
});


module.exports = {
    entry: ['./main.ts'],
    output: {
        path: __dirname + '/output',
        filename: "bundle.js"
    },
    plugins: [
        sassPlugin,
        jqueryPlugin,
        htmlPlugin
    ],
    devtool: 'inline-source-map',
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
                use: sassPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    }
};
