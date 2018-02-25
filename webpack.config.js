
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
    title: 'Snippets',
    template: 'body.html',
    inject: 'body'
});


module.exports = {
    entry: ['./main.tsx'],
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
        noInfo:true,
        watchContentBase: true
    },
    resolve: {
       extensions: ['.ts','.tsx', '.js']
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
          test: /\.tsx?$/,
          use: 'ts-loader'
        },
        {
            test:  /\.tsx?$/,
            enforce: 'pre',
            loader: 'tslint-loader',
            options: { /* Loader options go here */ }
        }
      ]
    }
};
