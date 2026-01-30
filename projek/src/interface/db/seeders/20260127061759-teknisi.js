'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('teknisi', [
      {
        nama_teknisi: 'Adam Zakiri',
        no_hp: "085789517092", 
        email: "adamrz@gmail.com",
        spesialisasi: "programmer",
        createdAt: new Date(), 
        updatedAt: new Date()   
      }                         
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('teknisi', null, {});

  }
};
