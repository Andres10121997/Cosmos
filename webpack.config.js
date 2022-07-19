const path = require("path");
const basePath = __dirname;
const distPath = "dist";

module.exports = {
    // mode.
    mode: "development",
    // entry point.
    entry: {
        app: './src/Script/JavaScript/index.js'
    },
    // output point.
    output: {
        path: path.join(basePath, distPath),
        filename: "Cosmos.js"
    }
};