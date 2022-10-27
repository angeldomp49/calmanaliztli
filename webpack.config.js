const path = require('path');
const BundleDeclarationsWebpackPlugin = require("bundle-declarations-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: "./test/index.tsx",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "test/compiled"),
        library:{
            type: "commonjs-static",
        }
    },
    module:{
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "babel-loader",
                exclude: /node_modules/ 
            }
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    target: "web",
    plugins: [
        new BundleDeclarationsWebpackPlugin()
    ]
};