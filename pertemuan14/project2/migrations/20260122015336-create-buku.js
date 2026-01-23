'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bukus', {
      id_buku: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_buku: {
        type: Sequelize.STRING,
      },
      penulis: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kategori: {
        type: Sequelize.ENUM("fiksi", "spritual"),
        defaultValue: "fiksi",
        allowNull: false,
      },
      tahun_penerbit: {
        type: Sequelize.DATE,
        allowNull: false,
      }      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bukus');
  }
};