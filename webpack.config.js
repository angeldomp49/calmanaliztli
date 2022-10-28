const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./test/index.tsx",
    output: {
        path: path.resolve(__dirname, "test/compiled"),
        filename: "index.js",
        library:{
            type: "commonjs-static",
        }
    },
    module:{
        rules: [
            {
                test: /\.(tsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [ "style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: "asset/resource"
              },
        ],

    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"]
    },
    target: "web",
};