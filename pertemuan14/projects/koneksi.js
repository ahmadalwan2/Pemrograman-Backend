const { Sequelize } = require('sequelize');

/**
 * Ini adalah susunan dasar sequelize
 */

const sequelize = new Sequelize('db_sequelize', 'root', '12345', {
  host: 'localhost',
  dialect: "mysql",
});

module.exports = sequelize;