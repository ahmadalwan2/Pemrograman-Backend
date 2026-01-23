'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buku extends Model {
    
    static associate(models) {
    }
  }
  Buku.init({
      id_buku: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nama_buku: {
        type: DataTypes.STRING,
      },
      penulis: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kategori: {
        type: DataTypes.ENUM("fiksi", "spritual"),
        defaultValue: "fiksi",
        allowNull: false,
      },
      tahun_penerbit: {
        type: DataTypes.DATE,
        allowNull: false,
      }  
  });
  return Buku;
};