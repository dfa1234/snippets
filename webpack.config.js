
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "./output/style.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: ['./main.js', './main.scss'],
    output: {
        filename: "./output/bundle.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass,
    ]
};

