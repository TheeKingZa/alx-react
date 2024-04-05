import $ from 'jquery';
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
