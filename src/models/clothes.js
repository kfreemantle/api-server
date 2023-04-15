'use strict';

const { Model, DataTypes } = require("sequelize");

class Clothes extends Model {}

const clothesModel = (sequelize) => {
  Clothes.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Clothes",
    }
  );
  return Clothes;
};

module.exports = clothesModel;
