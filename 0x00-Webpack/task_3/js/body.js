// body.js
import $ from 'jquery';
import _ from 'lodash';

// Add button and counter functionality to the body
let count = 0;

function incrementCount() {
    count++;
    $('#counter').text(count);
}

$(document).ready(function() {
    $('#increment-btn').click(incrementCount);
});
