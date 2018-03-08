const Sequelize = require('sequelize');

require('dotenv').config()

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'myql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  }
});

module.exports = sequelize;