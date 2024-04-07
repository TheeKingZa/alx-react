# React Props
[]() 0x02 []()
---

`Read` or `watch`:

* [React Official Website](https://react.dev/)
* [Getting started with React](https://www.taniarascia.com/getting-started-with-react/)
* [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [Enzyme](https://enzymejs.github.io/enzyme/docs/api/shallow.html)
* [React Fragments](https://react.dev/reference/react/Fragment)

---

# NEED TO KNOW?
* [How to create basic React components using functions](#creating-basic-react-components-using-functions)
* [How to reuse components](#reusing-components)
* [How to pass properties to components](#passing-properties-to-components)
* [How to define types for components](#defining-types-for-components)
* [How to use Fragments](#using-fragments)
* [When to use a key to improve a loop’s performance](#using-keys-to-improve-loop-performance)

---

# Creating Basic React Components using Functions:
You can create basic React components using functions by using ES6 arrow functions or regular functions. Here's an example:

```
    import React from 'react';

    // Functional Component
    const MyComponent = () => {
        return <div>Hello, World!</div>;
    };

    export default MyComponent;
```
---

[`^`](#need-to-know)

---
# Reusing Components:
Components in React are designed to be reusable. You can reuse a component by importing it into any other component or file where you need it. For example:

```
    import React from 'react';
    import MyComponent from './MyComponent';

    const App = () => {
    return (
        <div>
        <MyComponent />
        <MyComponent />
        </div>
    );
    };

    export default App;

```
---

[`^`](#need-to-know)

---
# Passing Properties to Components:
You can pass properties to components using props. Here's how you can pass a prop named "name" to a component:

```
    import React from 'react';

    const Greeting = (props) => {
        return <div>Hello, {props.name}!</div>;
    };

    export default Greeting;

```

And then you can use it like this:

```
    import React from 'react';
    import Greeting from './Greeting';

    const App = () => {
        return <Greeting name="Alice" />;
    };

    export default App;

```
---

[`^`](#need-to-know)

---
# Defining Types for Components:
You can define types for components using TypeScript or PropTypes. Here's an example using PropTypes:

```
    import React from 'react';
    import PropTypes from 'prop-types';

    const Greeting = (props) => {
        return <div>Hello, {props.name}!</div>;
    };

    Greeting.propTypes = {
        name: PropTypes.string.isRequired,
    };

    export default Greeting;

```
---

[`^`](#need-to-know)

---
# Using Fragments:
Fragments allow you to return multiple elements without adding extra nodes to the DOM. You can use empty angle brackets <> to create a fragment:

```
    import React from 'react';

    const MyComponent = () => {
    return (
        <>
        <div>First div</div>
        <div>Second div</div>
        </>
    );
    };

    export default MyComponent;

```
---

[`^`](#need-to-know)

---
# Using Keys to Improve Loop Performance:
When rendering a list of elements in React, it's important to provide a unique key to each element. This helps React identify which items have changed, been added, or been removed efficiently. Keys should be stable, unique, and preferably be derived from the data itself. For example:

```
    const items = ['item1', 'item2', 'item3'];

    const ListComponent = () => {
    return (
        <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    );
    };

```
    Here, key={index} is not the best practice,
    especially if the order or length of the list can change.
    
    It's better to use a unique identifier from your data if available.
    
    For example, if each item has a unique id, you could use key={item.id}.
---

[`.`](#react-props)[`^`](#need-to-know)

---