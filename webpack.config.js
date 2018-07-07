// require the path module
const path = require('path');
const webpack = require("webpack");

const baseConfig = {
    entry: './src/MinMaxSlider.ts',
    devtool: 'inline-source-map',
    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into 
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: [path.resolve(__dirname, 'scss/MinMaxSlider.scss')]
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: 'app.bundle.js',
        publicPath: '/dist/',
    },

    mode: 'production',
    plugins: [

    ]
};


module.exports = function (env) {

    console.log(`This is ${env} build`);

    if (env === "development") {
        baseConfig.devServer = {
            contentBase: path.resolve(__dirname, 'app'),
            watchContentBase: true, // watchContentBase only listens for root level appearantly.
        }
        baseConfig.mode = "development";
    }

    return baseConfig;
}