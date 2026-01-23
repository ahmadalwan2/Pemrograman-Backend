'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kategori extends Model {
    static associate(models) {
      Kategori.hasMany(models.Buku, {
        foreignKey: "kategoriId",
        as: "kategori",
      });
    }
  }
  Kategori.init({
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nama_kategori: {
        type: DataTypes.STRING(50),
        allowNull: false
      },

  },
    {
      sequelize, 
      modelName: "Kategori",
      tableName: "kategori"
    },
  );
  return Kategori;
};