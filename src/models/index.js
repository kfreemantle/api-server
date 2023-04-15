'use strict';

// Load environment variables from the .env file
require("dotenv").config();

const { Sequelize } = require("sequelize");
const FoodModel = require("./food");
const ClothesModel = require("./clothes");

// Initialize Sequelize with environment variables
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

// Initialize the Food model with the Sequelize instance
const Food = FoodModel(sequelize);

// Initialize the Clothes model with the Sequelize instance
const Clothes = ClothesModel(sequelize);

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// Export the Sequelize instance and the initialized models
module.exports = {
  sequelize,
  Food,
  Clothes,
};
