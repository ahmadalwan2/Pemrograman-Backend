'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('buku', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judul: {
        type: Sequelize.STRING(100),
      },
      jml_halaman: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ringkasan: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      harga: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      kategoriId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "penulis", // ini nama tabelnya
          key: "id", // ini primar_key dari table tersebut
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") // Ini untuk kasih defaultValue
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP") // Ini untuk kasih defaultValue
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('buku');
  }
};