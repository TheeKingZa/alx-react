# Webpack
[]() 0x00 []()
---

`Read` or `watch`:

* [Webpack documentation]()
* [Webpack beginner guide]()
* [npm-package.json]()
---

# NEED TO KNOW?
* [How to setup Webpack for a basic project]()
* [Entry points, output, and loaders]()
* [How to add plugins]()
* [How to split your code into chunks]()
* [How to setup a dev serve]()
---
# How to setup Webpack for a basic project
```
    Webpack is a powerful module bundler that helps bundle 
    JavaScript files for usage in a browser. 
    Setting up Webpack for a basic project 
    involves installing it as a development dependency 
    and configuring it using a webpack.config.js file.
```

* To set up Webpack for a basic project, follow these steps:

1. Install Webpack and webpack-cli as development dependencies:
```
    npm install webpack webpack-cli --save-dev

```
2. Create a webpack.config.js file in the root of your project directory and configure it according to your project needs.

3. Define entry points, output configuration, loaders, and any necessary plugins in the webpack.config.js.

4. Optionally, you can create scripts in your package.json to run Webpack commands.

Example webpack.config.js:
```
    const path = require('path');

    module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
            },
        },
        // Add more loaders for different file types if needed
        ],
    },
    };
```


# Entry points, output, and loaders
```
    * Entry points: Entry points in Webpack are the starting points for the bundling process. These are typically the main JavaScript files in your project.

    * Output: Output configuration specifies where Webpack should output the bundled files. It includes settings like the filename and output directory.
    
    * Loaders: Loaders allow Webpack to process different file types by transforming them before adding to the bundle. Common loaders include Babel for JavaScript, CSS loader for CSS files, etc.
```


# How to add plugins
```
    Plugins extend Webpack's functionality by 
    performing a wide range of tasks like generating HTML files, 
    optimizing bundles, and more. 
    Some common plugins include HtmlWebpackPlugin 
    for generating HTML files, 
    MiniCssExtractPlugin for extracting CSS into separate files, etc.
```

* To add plugins to Webpack, install the necessary plugins using npm and include them in your webpack.config.js file.

Example installing and using HtmlWebpackPlugin:
```
    npm install html-webpack-plugin --save-dev

```
 * in your webpack.config.js:

 ```
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
    // Other configurations...
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
            }),
            // Add more plugins as needed
        ],
    };

 ```

#  How to split your code into chunks
```
    Code splitting is a technique used to improve performance 
    by splitting the bundle into smaller chunks, 
    which can be loaded dynamically as needed. 
    Webpack's optimization features, 
    like the splitChunks configuration, 
    help achieve code splitting by 
    extracting common dependencies into separate chunks.
```

Example dynamic import for code splitting:

```
    // Inside your JavaScript file
    import('./module').then(module => {
        // Use the dynamically imported module
    });

```

# How to setup a dev server
```
    Webpack Dev Server provides live reloading and serves your application during development.
    It's a convenient way to develop your application without having
    to manually refresh the browser after making changes to your code.
    Configuration options for the dev server include specifying the 
    content base, port, and other settings.
```
Example installing and configuring webpack-dev-server:
```
    npm install webpack-dev-server --save-dev

```

* in your 'webpack.config.js'
```
    module.exports = {
        // Other configurations...
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000,
        },
    };

```
#!NOTE:

```
    You can then run webpack serve or include a script in your package.json to start the dev server.
```
---

[`^`](#need-to-know)

---