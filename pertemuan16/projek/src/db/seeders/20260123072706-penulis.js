'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('penulis', [
      {
        nama_penulis: 'Haikal_Hakam',
        alamat: 'Jl. Mangga',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_penulis: 'Beli_Dermawan',
        alamat: 'Jl. Apel',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        nama_penulis: 'Sulis',
        alamat: 'Jl. Sejahtera',
        createdAt: new Date(),
        updatedAt: new Date(),
      },                        
    ]);
  },

  async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('penulis', null, {});

  }
};
