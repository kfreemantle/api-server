'use strict';

function validator(request, response, next) {
  if (request.query.name) {
    next();
  } else {
    next('Valid name string is required.');
  }
}

module.exports = validator;
