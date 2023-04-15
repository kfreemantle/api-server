'use strict';

// Middleware for validating request bodies
const validator = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      next(); // Proceed to the next middleware or route handler
    }
  };
};

module.exports = validator;
