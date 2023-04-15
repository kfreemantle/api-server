'use strict';

// 500 error handler middleware for unhandled exceptions
const internalServerErrorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
};

module.exports = internalServerErrorHandler;
