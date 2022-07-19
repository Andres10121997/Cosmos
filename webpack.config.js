const path = require("path");
const basePath = __dirname;
const distPath = "dist";

module.exports = {
    // mode.
    mode: "development",
    // entry point.
    entry: {
        app: [
            "@babel/polyfill",
            "./src/Script/JavaScript/index.js"
        ],
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            }
        ]
    },
    // output point.
    output: {
        path: path.join(basePath, distPath),
        filename: "Cosmos.js"
    }
};