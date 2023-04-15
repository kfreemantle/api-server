'use strict';

const express = require("express");
const { Food, Clothes } = require("./models");
const foodRoutes = require("./routes/food");
const clothesRoutes = require("./routes/clothes");
const logger = require("./middleware/logger");
const notFoundHandler = require("./error-handlers/404");
const internalServerErrorHandler = require("./error-handlers/500");

// Initialize the Express app
const app = express();

// Middleware for logging request information
app.use(logger);

// Middleware for parsing JSON request bodies
app.use(express.json());

// Use the Food routes for requests starting with /food
app.use("/food", foodRoutes);

// Use the Clothes routes for requests starting with /clothes
app.use("/clothes", clothesRoutes);

// 404 error handler for unmatched routes
app.use(notFoundHandler);

// 500 error handler for unhandled exceptions
app.use(internalServerErrorHandler);

// Start the server and listen on the specified port
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});

// Export the app for use in index.js and testing
module.exports = app;
