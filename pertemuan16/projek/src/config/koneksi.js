const { Sequelize } = require('sequelize');
const config = require('../config/database.json').development;

/**
 * config. itu untuk mengakses konfigurasi database di file database.json
 */
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: false, // ini untuk menghilangkan Executing di terminal vscode
});

module.exports = sequelize;
