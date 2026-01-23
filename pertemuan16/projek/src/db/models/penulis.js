'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Penulis extends Model {
    static associate(models) {
        Penulis.hasMany(models.Buku, {
          foreignKey: "penulisId",
          as: "penulis",
        });
    }
  }
  Penulis.init({
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nama_penulis: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      alamat: {
        type: DataTypes.TEXT, // Make TEXT ya untuk alamat
        allowNull: false
      }
  },
  {
    sequelize, 
    modelName: "Penulis",
    tableName: "penulis"
  },
  );
  return Penulis;
};