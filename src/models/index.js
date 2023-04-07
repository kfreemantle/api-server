'use strict';

require('dotenv').config();

const { Sequelize } = require('sequelize');
const SQL_URL = process.env.SQL_URL || 'sqlite:memory';  // I don't understand this alt path
const sequelize = new Sequelize(SQL_URL);

module.exports = { sequelize };
