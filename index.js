'use strict';

// Import the server from src/server.js
const app = require("./src/server");

// Start the server (this is separated from src/server.js for testing purposes)
app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
  console.log("Press Ctrl+C to quit.");
});
