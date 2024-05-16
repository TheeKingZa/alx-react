# React Redux Connectors and Providers
[]() 0x09 []()
---

* [Redux CreateStore](https://react-redux.js.org/api/connect)
* [Redux Connect](https://react-redux.js.org/api/connect)
* [Redux Provider](https://react-redux.js.org/api/provider)
* [Redux Middleware](https://redux.js.org/tutorials/fundamentals/part-4-store#middleware)
* [Redux Thunk](https://github.com/reduxjs/redux-thunk)
* [Redux devtools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
* [Redux Reselect](https://github.com/reduxjs/reselect)

# NEED TO KNOW?
* [Redux connectors and how to use them](#redux-connectors)
* The different functions you can pass to a connector [`mapStateToProps`](#mapstatetoprops), [`mapDispatchToPros`](#mapdispatchtoprops)
* [How to map an action creator to a component using a connector](#mapping-an-action-creator-to-a-component-using-a-connector)
* [How to map an async action creator to a component with Redux Thunk](#mapping-an-async-action-creator-to-a-component-with-redux-thunk)
* [What Redux Providers are and how to set up your app’s store](#react-redux-connectors-and-providers)
* [How you can improve a connector’s performance using Reselect](#improving-a-connectors-performance-using-reselect)
* [How to use Redux’s dev tools to debug the state of your application](#using-redux-devtools-to-debug-the-state-of-your-application)
---
# Overview
```
Redux connectors (connect from react-redux)
allow you to connect your React components to the Redux store,
enabling your components to read state and dispatch actions.
```

# This guide covers the following topics:

* Different functions you can pass to a connector (`mapStateToProps`, `mapDispatchToProps`)
* Mapping an action creator to a component using a connector
* Mapping an async action creator to a component with Redux Thunk
* Redux Providers and setting up your app's store
* Improving a connector’s performance using Reselect
* Using Redux DevTools to debug the state of your application

---

# Redux Connectors

# mapStateToProps
mapStateToProps is a function that extracts data from the Redux store and passes it as props to your React component.
```
    const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.ui.isLoggedIn,
    };
    };

```

# mapDispatchToProps
mapDispatchToProps is a function that creates functions that dispatch actions and passes them as props to your component.

```
    const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (email, password) => dispatch(logIn(email, password)),
        logOut: () => dispatch(logOut()),
    };
    };

```

# Connecting a Component
Use the connect function from react-redux to connect your component to the Redux store.

```
    import { connect } from 'react-redux';

    class MyComponent extends React.Component {
    // Component implementation
    }

    export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);

```
# Mapping an Action Creator to a Component Using a Connector
Define your action creators:

```
    // actions.js
    export const logIn = (email, password) => ({
    type: 'LOGIN',
    payload: { email, password },
    });

    export const logOut = () => ({
    type: 'LOGOUT',
    });

```

Connect your action creators to a component:
```
    import { connect } from 'react-redux';
    import { logIn, logOut } from './actions';

    const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (email, password) => dispatch(logIn(email, password)),
        logOut: () => dispatch(logOut()),
    };
    };

    export default connect(null, mapDispatchToProps)(MyComponent);

```

# Mapping an Async Action Creator to a Component with Redux Thunk
First, install Redux Thunk:

```
    npm install redux-thunk

```

Configure your store to use Redux Thunk:
```
    // store.js
    import { createStore, applyMiddleware } from 'redux';
    import thunk from 'redux-thunk';
    import rootReducer from './reducers';

    const store = createStore(rootReducer, applyMiddleware(thunk));

    export default store;

```
Define an async action creator:
```
    // actions.js
    export const fetchData = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_DATA_REQUEST' });
        try {
        const response = await fetch('/api/data');
        const data = await response.json();
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
        } catch (error) {
        dispatch({ type: 'FETCH_DATA_FAILURE', error });
        }
    };
    };

```
Connect the async action creator to your component:
```
    import { connect } from 'react-redux';
    import { fetchData } from './actions';

    const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData()),
    };
    };

    export default connect(null, mapDispatchToProps)(MyComponent);

```
---

[`^`](#need-to-know)

---
# Redux Providers and Setting Up Your App’s Store
Wrap your root component with the Provider component from react-redux and pass the store to it:
```
    // index.js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Provider } from 'react-redux';
    import App from './App/App';
    import store from './redux/store';

    ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
    );

```
---

[`^`](#need-to-know)

---
# Improving a Connector’s Performance Using Reselect
Install Reselect:
```
    npm install reselect

```

Create a selector using Reselect:
```
    // selectors.js
    import { createSelector } from 'reselect';

    const getItems = (state) => state.items;

    export const getFilteredItems = createSelector(
    [getItems],
    (items) => items.filter(item => item.isActive)
    );

```

Use the selector in `mapStateToProps`:
```
    import { getFilteredItems } from './selectors';

    const mapStateToProps = (state) => {
    return {
        items: getFilteredItems(state),
    };
    };

    export default connect(mapStateToProps)(MyComponent);

```
---

[`^`](#need-to-know)

---
# Using Redux DevTools to Debug the State of Your Application
Install the Redux DevTools browser extension for Chrome or Firefox.

Configure your store to use Redux DevTools:

```
    // store.js
    import { createStore } from 'redux';
    import rootReducer from './reducers';

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, composeEnhancers());

    export default store;

```

With Redux DevTools, you can inspect every action, view the state before and after actions, and even time-travel to debug issues.

# Conclusion
This guide provides a comprehensive overview of using Redux connectors with React. By following these steps, you can effectively connect your components to the Redux store, manage state, dispatch actions, and improve performance and debugging capabilities.

---

[`^`](#need-to-know)

---