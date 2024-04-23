/* 0-fromjs.js*/
//import fromJS function from immutable.js
import { fromJS } from 'immutable';

// Define the getImmutableObject function
const getImmutableObject = (object) => {
    // Convert the input object into an immutable Map
    const immutableMap = fromJS(object);
    return immutableMap;
};

// Export the getImmutableObject function
export default getImmutableObject;