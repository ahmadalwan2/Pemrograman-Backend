'use strict';

/** @type {import('sequelize-cli').Migration} */

/**
 * Jangan lupa sesuaikan id_jurusan nya
 * dan sesuaikan field-field nya
 */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('jurusan', [
      {
        id_jurusan: '1',
        nama_jurusan: 'Teknik Komputer',        
      },
      {
        id_jurusan: '2',
        nama_jurusan: 'Teknik Sipil',       
      }, 
      {
        id_jurusan: '3',
        nama_jurusan: 'Akutansi',       
      },            
    ]);
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('jurusan', null, {});

  }
};