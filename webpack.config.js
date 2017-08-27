
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "./output/style.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: ['./main.ts'],
    output: {
        filename: "./output/bundle.js"
    },
    plugins: [
        extractSass,
    ],
    devtool: 'inline-source-map',
    resolve: {
       extensions: ['.ts', '.js']
    },
    module: {
        rules: [
          {
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
        },
        {
          test: /\.ts$/,
          use: 'ts-loader'
        }
      ]
    }
};
