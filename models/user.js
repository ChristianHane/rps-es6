const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

const User = sequelize.define('users', {
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fireBase_uid: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  wins: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  losses: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  currWinStreak: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  highestWinStreak: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  }
}, {
  timestamps: true,
});

sequelize.sync();

module.exports = User;