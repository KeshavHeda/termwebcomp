const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        apple: path.join(__dirname, "src", "apple-react-cmp.js"),
        banana: path.join(__dirname, "src", "banana-react-cmp.js"),
        tcheader: path.join(__dirname, "src/cmpHeader", "TCHeader.js"),
        wtcheader: path.join(__dirname, "src/cmpHeader", "WTCHeader.js"),
        main: path.join(__dirname, "src", "index.js"),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name]-bundle.js",
        globalObject: "this",
        // library: {
        //     name: "tclibrary",
        //     export: "default",
        // },
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                commons: {
                    name: 'common',
                    chunks: 'initial',
                    minChunks: 2,
                },
            }
        }
    }
}