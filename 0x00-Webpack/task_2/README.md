# Task_2
---

Add support for CSS files in your webpack configuration, you'll need to install some additional loaders.

Here's how you can modify your webpack.config.js file to include CSS bundling support:
```
    const path = require('path');

    module.exports = {
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        ],
    },
    };

```
# Make sure to install the necessary loaders if you haven't already:

```
    npm install style-loader css-loader --save-de

```

# Make sure to configure Webpack to optimize images.
To optimize images in webpack, you can use the image-webpack-loader along with other loaders like url-loader or file-loader to handle image files and optimize them during the bundling process.

First, install the necessary loaders:
```
    npm install image-webpack-loader url-loader --save-dev

```

Then, update your webpack configuration (webpack.config.js) to include the image-webpack-loader and configure it to optimize images:

```
    const path = require('path');

    module.exports = {
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: [
            {
                loader: 'url-loader',
                options: {
                limit: 8192, // Convert images < 8kb to base64 strings
                name: '[name].[ext]',
                outputPath: 'images',
                publicPath: 'images',
                },
            },
            {
                loader: 'image-webpack-loader',
                options: {
                mozjpeg: {
                    progressive: true,
                    quality: 65,
                },
                optipng: {
                    enabled: false,
                },
                pngquant: {
                    quality: [0.65, 0.90],
                    speed: 4,
                },
                gifsicle: {
                    interlaced: false,
                },
                webp: {
                    quality: 75,
                },
                },
            },
            ],
        },
        ],
    },
    };

```
# Htmlwebpack plugin
you need to install 'html-webpack-plugin' as a development dependency in your project. You can do this by running the following command in your project directory:
```
    npm install --save-dev html-webpack-plugin
```