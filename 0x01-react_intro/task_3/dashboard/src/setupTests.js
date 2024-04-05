// setupTests.js

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import '@testing-library/jest-dom';
// setupTests.js

// Import the configure function from Enzyme to set up the adapter.
import { configure } from 'enzyme';

// Import the adapter for React 17 from the installed package.
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Configure Enzyme to use the specified adapter.
configure({ adapter: new Adapter() });
