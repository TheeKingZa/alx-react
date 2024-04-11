// header.js

import $ from 'jquery';
import _ from 'lodash';

console.log('Init header');

// Add content to the header
const headerContent = `
    <div class="logo">Holberton Dashboard</div>
    <h1>Welcome to the Dashboard</h1>
`;

// Append the header content to the DOM
$('header').html(headerContent);
