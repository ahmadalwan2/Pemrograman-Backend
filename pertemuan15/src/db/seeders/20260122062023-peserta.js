'use strict';

/** @type {import('sequelize-cli').Migration} */

/**
 * Jangan sampai child nya dulu yang dibuat seeder nya, klo ga nanti bakal error Foreign Key
 * Sesauikan juga nama field-field nya ya
 */
module.exports = {
  async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('peserta', [
      {
        id_peserta: '1',
        nama_peserta: 'Muhammad',
        email: 'sueb@gmail.com',
        status: 'active',
        jurusanId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_peserta: '2',
        nama_peserta: 'Beli',
        email: 'beli@gmail.com',
        status: 'active',
        jurusanId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_peserta: '3',
        nama_peserta: 'Ahmad',
        email: 'syauki@gmail.com',
        status: 'inactive',
        jurusanId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('peserta', null, {});

  }
};