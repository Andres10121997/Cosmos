const path = require('path');

module.exports = {
    module: {
        rules: {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }
    },
    entry: './src/Script/JavaScript',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        clean: true,
        filename: 'Cosmos.js'
    }
};