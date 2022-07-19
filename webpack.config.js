const path = require("path");
const basePath = __dirname;
const distPath = "dist";

const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // mode.
    mode: "production", // "production" | "development" | "none"
    // entry point.
    entry: {
        app: [
            "@babel/polyfill",
            "./src/Script/JavaScript/index.js",
            /*"./src/Script/JavaScript/Cellular automata/Index.js",
            "./src/Script/JavaScript/Cellular automata/Init.js",

            "./src/Script/JavaScript/Time/Today.js",
            "./src/Script/JavaScript/Time/Clock/Clock.js",
            "./src/Script/JavaScript/Time/Clock/Insert/Date.js",
            "./src/Script/JavaScript/Time/Clock/Insert/Time.js",
            "./src/Script/JavaScript/Time/Clock/Insert/Clock.js",
            "./src/Script/JavaScript/Time/Variable/Date.js",*/
        ]
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
        filename: "JavaScript/[name].js"
    },
    // plugins
    plugins: [
        /*new HtmlWebpackPlugin({
            template: "./View/Clock.html"
        })*/
    ],
    optimization: {
        /*chunkIds: "size",*/
        // method of generating ids for chunks
        /*moduleIds: "size",*/
        // method of generating ids for modules
        /*mangleExports: "size",*/
        // rename export names to shorter names
        minimize: false,
        // minimize the output files
    }
};