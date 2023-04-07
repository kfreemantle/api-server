'use strict';

function error404 (error, request, response, next) {
  console.log(error);
  response.status(404).send('Not Found error');
}

module.exports = error404;