import $ from 'jquery';
import debounce from 'lodash/debounce';
import _ from 'lodash';

$(document).ready(function() {
  // Elements to add to the DOM
  $('<p>').text('Holberton Dashboard').appendTo('body');
  $('<p>').text('Dashboard data for the students').appendTo('body');
  $('<button>').text('Click here to get started').appendTo('body');
  $('<p>').attr('id', 'count').appendTo('body');
  $('<p>').text('Copyright - Holberton School').appendTo('body');

  // Counter function
  let count = 0;
  const updateCounter = _.debounce(function() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }, 300);

  // Bind debounce function to button click event
  $('button').click(updateCounter);
});


const handleInput = () => {
  // Function to handle user input
};

// Create a debounced version of the input handler with a delay of 500ms
const debouncedInputHandler = debounce(handleInput, 500);

// Attach the debounced input handler to the input element
document.getElementById('searchInput').addEventListener('input', debouncedInputHandler);

