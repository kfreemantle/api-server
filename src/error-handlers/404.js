'use strict';

// 404 error handler middleware for unmatched routes
const notFoundHandler = (req, res, next) => {
  res.status(404).json({ error: "Not Found" });
};

module.exports = notFoundHandler;
