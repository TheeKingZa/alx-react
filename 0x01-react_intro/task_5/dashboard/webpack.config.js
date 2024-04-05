const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Set the mode to development
    mode: 'development',
    // Entry point for the application
    entry: './src/index.js',
    // Output configuration for bundled files
    output: {
        // Name of the bundled JavaScript file
        filename: 'bundle.js',
        // Path to the output directory
        path: path.resolve(__dirname, 'dist'),
    },
    // Configuration for development server
    devtool: 'inline-source-map',
    devServer: {
        // Set up static file serving
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        // Enable hot module replacement
        hot: true
    },
    // Module rules for handling different file types
    module: {
        rules: [
            {
                // Rule for handling JavaScript/JSX files
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            // Rules for handling CSS files, image files, etc.
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
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
