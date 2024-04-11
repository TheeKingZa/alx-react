// footer.js
import $ from 'jquery';

// Append copyright text to the footer
const copyrightText = 'Copyright - Holberton School';

$(document).ready(function() {
    $('footer').append(`<p>${copyrightText}</p>`);
});
