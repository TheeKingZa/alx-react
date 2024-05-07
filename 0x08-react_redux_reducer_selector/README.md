# React Redux reducer+selector
[]() 0x08 []()
---

`Read` or `watch`:
Read or watch:

* [Reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)
* [Selectors](https://redux.js.org/introduction/learning-resources#selectors)
* [Writing tests](https://redux.js.org/usage/writing-tests)
* [Immutable Map documentation](https://immutable-js.com/docs/)
* [Normalizr](https://github.com/paularmstrong/normalizr)
* [Normalizing State Shape](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape)

# NEED TO KNOW?
* [The purpose of a reducer and the role it plays within your application](#the-purpose-of-a-reducer-and-its-role-within-your-application)
* [Why a reducer should stay as pure as possible](#why-a-reducer-should-stay-as-pure-as-possible)
* [Why mutations should not happen within a reducer](#why-mutations-should-not-happen-within-a-reducer)
* [The use of Immutable within the reducer](#the-use-of-immutable-within-the-reducer)
* [The use of Normalizr within the app](#the-use-of-normalizr-within-the-app)
* [Selectors: what they are and when to use them](#selectors-what-they-are-and-when-to-use-them)

---

# The purpose of a reducer and its role within your application:
    A reducer is a pure function that takes the previous state and an action, and returns the next state of the application. It plays a crucial role in managing the state of an application in a predictable way. Reducers are commonly used in state management libraries like Redux, where they form the core logic for updating application state.
---

[`^`](#need-to-know)

---
# Why a reducer should stay as pure as possible:
    Reducers should remain pure functions to ensure predictability and maintainability of the application state. Pure functions produce the same output for the same input and have no side effects. This property makes it easier to reason about the behavior of the application and enables features like time-travel debugging.

Javascript
```
    // Example of a pure reducer
    const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return { count: state.count + 1 };
        case 'DECREMENT':
        return { count: state.count - 1 };
        default:
        return state;
    }
    };
```
---

[`^`](#need-to-know)

---
# Why mutations should not happen within a reducer:
    Mutations within a reducer can lead to unexpected behavior and make the application state unpredictable. Since reducers should be pure functions, they should not modify the input state directly. Instead, they should return a new state object with the desired changes applied.
---

[`^`](#need-to-know)

---
# The use of Immutable within the reducer:
    Immutable data structures ensure that the state remains unchanged, which is essential for maintaining the purity of reducers. Libraries like Immutable.js provide immutable data structures that can be used to create new state objects efficiently.

Javascript
```
    // Example of using Immutable.js within a reducer
    import { Map } from 'immutable';

    const initialState = Map({ count: 0 });

    const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return state.set('count', state.get('count') + 1);
        case 'DECREMENT':
        return state.set('count', state.get('count') - 1);
        default:
        return state;
    }
    };
```
---

[`^`](#need-to-know)

---
# The use of Normalizr within the app:

    Normalizr is a library used for normalizing nested JSON data according to a schema. It's commonly used in Redux applications to flatten and organize nested data structures fetched from APIs. Normalization helps in improving performance, simplifying state management, and avoiding data duplication.
---

[`^`](#need-to-know)

---
# Selectors: what they are and when to use them:
    Selectors are functions used to extract specific pieces of data from the application state. They encapsulate the logic for deriving values from the state and provide an interface for accessing that data. Selectors are particularly useful in large applications with complex state structures, as they centralize the access to state data and improve code maintainability.

Javascript
```
    // Example of a selector
    const selectCount = (state) => state.count;

    // Usage of selector in mapStateToProps
    const mapStateToProps = (state) => ({
    count: selectCount(state),
    });
```

```
These concepts are fundamental to building scalable and maintainable applications,
especially in the context of state management
```

---

[`^`](#need-to-know)

---