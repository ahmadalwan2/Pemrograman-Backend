'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('kategori', [
      {
        nama_kategori: 'Komik',
        createdAt: new Date(), 
        updatedAt: new Date()        
      },
      {
        nama_kategori: 'Novel',
        createdAt: new Date(), 
        updatedAt: new Date()        
      },
      {
        nama_kategori: 'Biografi',
        createdAt: new Date(), 
        updatedAt: new Date()        
      },
      {
        nama_kategori: 'Sejarah',
        createdAt: new Date(), 
        updatedAt: new Date()        
      },                         
    ]);
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('kategori', null, {});
  }
};