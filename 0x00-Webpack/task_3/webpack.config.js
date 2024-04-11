const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        header: './js/header.js', // Adjusted entry paths
        body: './js/body.js',
        footer: './js/footer.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    devtool: 'inline-source-map', // Enable inline source mapping
    module: {
        rules: [
            {
                // Loaders for css, images and etc
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html' // Adjusted HtmlWebpackPlugin configuration
        }),
        new CleanWebpackPlugin() // Add CleanWebpackPlugin to clean build folders
    ],
    devServer: {
        port: 8564, // Config the devServer to run on port
        open: false,
    },
};
