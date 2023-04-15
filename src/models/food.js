'use strict';

const { Model, DataTypes } = require("sequelize");

class Food extends Model {}

const foodModel = (sequelize) => {
  Food.init(
    {
      // Defining the fields for the Food model
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // Associating the Food model with the sequelize instance
      sequelize,
      modelName: "Food",
    }
  );
  return Food;
};

module.exports = foodModel;
