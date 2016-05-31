'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');


$('#launch-modal').on('click', function () {
  $('#sign-in-modal').modal('show')
})

$('sign-in-form').on('submit', function () {
  $('#sign-in-modal').modal('hide')
})
