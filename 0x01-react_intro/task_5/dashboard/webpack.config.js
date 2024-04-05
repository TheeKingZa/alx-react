// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Set the mode to development
    mode: 'development',
    // Entry point for the application
    entry: './src/index.js',
    // Output configuration for bundled files
    output: {
        // Path to the output directory
        path: path.resolve(__dirname, 'dist'),
        // Name of the bundled JavaScript file
        filename: 'bundle.js',
    },
    // Configuration for development server
    devtool: 'inline-source-map',
    devServer: {
        // Set the content base directory
        contentBase: './dist',
        // Enable hot module replacement
        hot: true,
    },
    // Module rules for handling different file types
    module: {
        rules: [
            {
                // Rule for handling CSS files
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // Use style-loader to inject CSS into the DOM and css-loader to handle CSS imports
            },
            {
                // Rule for handling image files
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader', // Use file-loader to handle image imports
                    },
                ],
            },
        ],
    },
    // Plugins to enhance webpack functionality
    plugins: [
        new HtmlWebpackPlugin({
            // Generate HTML file based on template
            template: './public/index.html',
        }),
    ],
};
