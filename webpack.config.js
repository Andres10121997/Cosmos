const path = require("path");
const basePath = __dirname;
const distPath = "dist";
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // mode.
    mode: "production", // "production" | "development" | "none"
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
                exclude: [
                    /node_modules/,
                    path.join(basePath, "node_modules"),
                    path.join(basePath, "dist")
                ],
                use: [
                    "babel-loader"
                ],
                type: "javascript/auto",
            }
        ]
    },
    // output point.
    output: {
        path: path.join(basePath, distPath),
        filename: "JavaScript/Cosmos.js"
    },
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: "./View/Clock.html"
        })
    ],
    optimization: {
        chunkIds: "size",
        // method of generating ids for chunks
        moduleIds: "size",
        // method of generating ids for modules
        mangleExports: "size",
        // rename export names to shorter names
        minimize: false,
        // minimize the output files
    }
};