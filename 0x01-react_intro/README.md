# React Intro
[]() 0x01 []()
---

`Read` or `watch`:
---
* [React Official Website](https://react.dev/)
* [Getting started with React](https://www.taniarascia.com/getting-started-with-react/)
* [Quick Start with React](https://react.dev/learn)
* [create-react-app](https://github.com/facebook/create-react-app)
* [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?pli=1)
* [What is Babel?](https://babeljs.io/docs/)
* [Enzyme](https://enzymejs.github.io/enzyme/docs/api/shallow.html)

# Need To Know?
* [How to create a basic Javascript application using React](#creating-a-basic-javascript-application-using-react)
* [How to use the package create-react-app to start developing quickly with React](#create-a-new-react-project-create-a-new-react-project-by-running)
* [What JSX is and how to use it](#)
* [How to use the React Developer Tools to debug your code]()
* [How to use Enzyme’s Shadow rendering to test your application]()
* [How to use React with Webpack & Babel]()

---


# Creating a Basic JavaScript Application using React
To create a basic JavaScript application using React, you can follow these steps:

Install Node.js: Ensure you have Node.js installed on your system. You can download it from the official website: https://nodejs.org/

Install create-react-app: Use the create-react-app tool to quickly set up a new React project. Install it globally using npm:

```
    npm install -g create-react-app

```

# Create a new React project:
    * Create a new React project by running.

```
    npx create-react-app my-react-app

```

Replace my-react-app with your preferred project name.

Navigate to your project directory: After creating the project, navigate into the project directory:

```
    cd my-react-app

```

Start the development server: Start the development server:

```
    npm start

```

# Using JSX in React
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. JSX makes it easier to write and read React components. Here's an example of JSX:

```
    import React from 'react';

    // Define a functional component named App
    function App() {
        // Return JSX elements representing a simple HTML structure
        return (
            <div>
                {/* Render a heading with the text "Hello, World!" */}
                <h1>Hello, World!</h1>
                {/* Render a paragraph with the text "This is a JSX element." */}
                <p>This is a JSX element.</p>
            </div>
        );
    }

    // Export the App component as the default export
    export default App;

```

# Using the React Developer Tools
    React Developer Tools is a browser extension available for Chrome and Firefox. It allows you to inspect React component hierarchies in the Chrome Developer Tools or Firefox Developer Tools. You can use it to debug your React applications and view component tree, props, and state.

# Using Enzyme's Shadow Rendering for Testing
    Enzyme is a JavaScript testing utility for React that makes it easier to assert, manipulate, and traverse your React components' output. Shadow rendering in Enzyme refers to rendering components in isolation from the rest of the application, which helps in testing components independently.

# Using React with Webpack & Babel
    When you use create-react-app, it sets up Webpack and Babel for you automatically. Webpack is a module bundler, and Babel is a JavaScript compiler. Together, they allow you to write modern JavaScript code (using ES6/ES7 features) and JSX syntax, which get compiled down to browser-compatible JavaScript.






---

[`^`](#need-to-know)

---