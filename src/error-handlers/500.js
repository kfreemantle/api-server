'use strict';

function error500 (error, request, response, next) {
  console.log(error);
  response.status(500).send('Undefined Server Error');
}

module.exports = error500;
