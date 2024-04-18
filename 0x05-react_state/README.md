# React State
[]() 0x05 []()
---
`Read` or `watch`:

* [State and lifecycle](https://legacy.reactjs.org/docs/state-and-lifecycle.html)
* [SetState and State callback](https://legacy.reactjs.org/docs/react-component.html)
* [Context](https://legacy.reactjs.org/docs/context.html)
* [Forms and Controlled components](https://legacy.reactjs.org/docs/forms.html)
* [Lifting State Up](https://legacy.reactjs.org/docs/lifting-state-up.html)
* [React Hooks](https://legacy.reactjs.org/docs/hooks-intro.html)
* [Enzyme State](https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/state.html)
* [Enzyme SetState](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/setState.html)
* [Enzyme Instance](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/instance.html)
* [Enzyme Simulate](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/simulate.html)

---

# NEED TO KNOW?
* [What the state of a component or a container is](#state-of-a-component-or-container)
* [The lifecycle of a component](#lifecycle-of-a-component)
* [How to modify a state and execute code in the right order](#modifying-state-and-executing-code-in-the-right-order)
* [What a controlled component is](#controlled-component)
* [How to use Forms in React](#using-forms-in-react)
* [How to reuse smaller components, keep them pure, and lift its state to principal containers](#reusing-smaller-components-keeping-them-pure-and-lifting-state)
* [The use of a React Hook and how to create one](#use-of-react-hooks-and-creating-one)
* [How to test State changes with Enzyme](#testing-state-changes-with-enzyme)

---

# Requirements
```
    * All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x
    * Allowed editors: vi, vim, emacs, Visual Studio Code
    * All your files should end with a new line
    * A README.md file, at the root of the folder of the project, is mandatory
```
---

[`^`](#need-to-know)

---
# State of a Component or Container:
The state of a component or container in React refers to the internal data that the component manages. It represents the current condition of the component and can be modified over time. State is typically used to store information that may change during the lifecycle of the component, such as user input, UI state, or data fetched from an API.
---

```
    import React, { Component } from 'react';

    class MyComponent extends Component {
    componentDidMount() {
        // Perform actions after component is mounted
        console.log('Component mounted');
    }

    componentWillUnmount() {
        // Perform cleanup before component is unmounted
        console.log('Component will unmount');
    }

    render() {
        return <div>Hello, world!</div>;
    }
    }
```

[`^`](#need-to-know)

---

# Lifecycle of a Component:
The lifecycle of a component in React refers to the series of events that occur from its creation to its destruction. These events include initialization, mounting, updating, and unmounting. Each event corresponds to a specific method that can be defined in a class component, allowing developers to execute code at different stages of the component's lifecycle.
```
    import React, { Component } from 'react';

    class MyComponent extends Component {
    componentDidMount() {
        // Perform actions after component is mounted
        console.log('Component mounted');
    }

    componentWillUnmount() {
        // Perform cleanup before component is unmounted
        console.log('Component will unmount');
    }

    render() {
        return <div>Hello, world!</div>;
    }
    }
```
---

[`^`](#need-to-know)

---
# Modifying State and Executing Code in the Right Order:
State can be modified in React using the setState() method, which is provided by the React component class. It's essential to update state correctly to ensure that UI changes reflect the latest data. Executing code in the right order involves understanding the component lifecycle and determining the appropriate lifecycle method to perform specific tasks, such as fetching data or updating the UI.
```
    import React, { useState, useEffect } from 'react';

    function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Perform actions after every render
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        </div>
    );
    }

```
---

[`^`](#need-to-know)

---
# Controlled Component:
A controlled component in React is a form element whose value is controlled by React's state. This means that the value of the input field is derived from the component's state and changes to the input are handled by updating the state. Controlled components provide a single source of truth for the input's value, making it easier to manage form data and handle user input.
```
    import React, { useState } from 'react';

    function ControlledInput() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <input
        type="text"
        value={value}
        onChange={handleChange}
        />
    );
    }

```
---

[`^`](#need-to-know)

---
# Using Forms in React:
Forms in React are used to collect and manage user input. They consist of form elements such as <input>, <textarea>, and <select>, which can be controlled or uncontrolled components. Controlled components are preferred in React because they provide more control over form data and allow for easier validation and handling of user input.

```
    import React, { useState } from 'react';

    function ControlledInput() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <input
        type="text"
        value={value}
        onChange={handleChange}
        />
    );
    }
```
---

[`^`](#need-to-know)

---
# Reusing Smaller Components, Keeping Them Pure, and Lifting State:
In React, smaller components are often created to encapsulate specific UI elements or functionality. By keeping these components pure, meaning they only depend on their props and don't modify their input, they become more reusable and easier to maintain. Additionally, lifting state involves moving the state of a component higher up in the component hierarchy to a common ancestor, allowing multiple child components to share the same state.
```
    // Small component
    function Button(props) {
    return <button onClick={props.onClick}>{props.label}</button>;
    }

    // Pure component
    function PureButton({ onClick, label }) {
    return <button onClick={onClick}>{label}</button>;
    }

    // Lift state example
    function ParentComponent() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
        <ChildComponent count={count} />
        <Button onClick={incrementCount} label="Increment Count" />
        </div>
    );
    }

    function ChildComponent({ count }) {
    return <p>Count: {count}</p>;
    }
```
---

[`^`](#need-to-know)

---
# Use of React Hooks and Creating One:
React Hooks are functions that allow functional components to use state and other React features without writing a class. They enable developers to add stateful logic to functional components, making them more versatile and easier to understand. Developers can also create custom hooks to encapsulate reusable logic that can be shared across multiple components.
```
    import React, { useState } from 'react';

    function useCustomHook(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return [value, handleChange];
    }

    function Form() {
    const [name, setName] = useCustomHook('');
    const [email, setEmail] = useCustomHook('');

    return (
        <form>
        <input type="text" value={name} onChange={setName} />
        <input type="email" value={email} onChange={setEmail} />
        </form>
    );
    }
```
---

[`^`](#need-to-know)

---
# Testing State Changes with Enzyme:
Enzyme is a testing utility for React that makes it easier to assert, manipulate, and traverse React components' output. When testing state changes, Enzyme can be used to simulate user interactions, such as clicking a button or entering text into an input field, and then assert that the component's state has been updated correctly based on those interactions. This ensures that the component behaves as expected in different scenarios.
```
    import React, { useState } from 'react';
    import { shallow } from 'enzyme';

    function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        </div>
    );
    }

    // Enzyme test
    describe('Counter component', () => {
    it('increments count when button is clicked', () => {
        const wrapper = shallow(<Counter />);
        wrapper.find('button').simulate('click');
        expect(wrapper.find('p').text()).toContain('1');
    });
    });
```

---

[`^`](#need-to-know)

---