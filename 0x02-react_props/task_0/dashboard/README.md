# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Task_5:

run: 
```
    npx webpack
```

results: 

```
    assets by path *.js 2.87 MiB
        asset bundle.js 2.86 MiB [emitted] (name: main)
        asset node_modules_web-vitals_dist_web-vitals_js.bundle.js 12.4 KiB [emitted]
    asset 24bab5d633e36ca8d17e.jpg 23.1 KiB [emitted] [immutable] [from: src/assets/holberton_logo.jpg] (auxiliary name: main)
    asset index.html 1.71 KiB [compared for emit]
    runtime modules 7.2 KiB 12 modules
    javascript modules 1.1 MiB
        modules by path ./node_modules/ 1.09 MiB 16 modules
        modules by path ./src/ 8.25 KiB
            modules by path ./src/App/ 4.41 KiB 3 modules
            modules by path ./src/*.js 1010 bytes 2 modules
            modules by path ./src/*.css 2.44 KiB 2 modules
            ./src/utils/utils.js 427 bytes [built] [code generated]
    ./src/assets/holberton_logo.jpg 42 bytes (javascript) 23.1 KiB (asset) [built] [code generated]
    webpack 5.91.0 compiled successfully in 2808 ms
```

Breakdown of the output:
```
    * Assets: webpack processed various assets, including JavaScript files (*.js), the main bundle (bundle.js), a file related to web vitals (web-vitals_js.bundle.js), an image file (24bab5d633e36ca8d17e.jpg), and an HTML file (index.html).

    * Runtime Modules: webpack generated runtime modules, totaling 7.2 KiB in size, spread across 12 modules.

    * JavaScript Modules: The JavaScript modules are divided into two main categories:

        * Modules from node_modules: These modules occupy approximately 1.09 MiB and consist of 16 modules.
        * Modules from src/: These modules occupy around 8.25 KiB and include subdirectories such as App/, individual JavaScript files, and CSS files.
```



Task_5:

run: 
```
    npx webpack
```

results: 

```
    assets by path *.js 2.87 MiB
        asset bundle.js 2.86 MiB [emitted] (name: main)
        asset node_modules_web-vitals_dist_web-vitals_js.bundle.js 12.4 KiB [emitted]
    asset 24bab5d633e36ca8d17e.jpg 23.1 KiB [emitted] [immutable] [from: src/assets/holberton_logo.jpg] (auxiliary name: main)
    asset index.html 1.71 KiB [compared for emit]
    runtime modules 7.2 KiB 12 modules
    javascript modules 1.1 MiB
        modules by path ./node_modules/ 1.09 MiB 16 modules
        modules by path ./src/ 8.25 KiB
            modules by path ./src/App/ 4.41 KiB 3 modules
            modules by path ./src/*.js 1010 bytes 2 modules
            modules by path ./src/*.css 2.44 KiB 2 modules
            ./src/utils/utils.js 427 bytes [built] [code generated]
    ./src/assets/holberton_logo.jpg 42 bytes (javascript) 23.1 KiB (asset) [built] [code generated]
    webpack 5.91.0 compiled successfully in 2808 ms
```

Breakdown of the output:
```
    * Assets: webpack processed various assets, including JavaScript files (*.js), the main bundle (bundle.js), a file related to web vitals (web-vitals_js.bundle.js), an image file (24bab5d633e36ca8d17e.jpg), and an HTML file (index.html).

    * Runtime Modules: webpack generated runtime modules, totaling 7.2 KiB in size, spread across 12 modules.

    * JavaScript Modules: The JavaScript modules are divided into two main categories:

        * Modules from node_modules: These modules occupy approximately 1.09 MiB and consist of 16 modules.
        * Modules from src/: These modules occupy around 8.25 KiB and include subdirectories such as App/, individual JavaScript files, and CSS files.
```
