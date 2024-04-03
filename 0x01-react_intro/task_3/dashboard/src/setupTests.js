// Filename: setupTests.js
// Purpose: Setup file for Enzyme tests

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
