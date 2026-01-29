"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Alat extends Model {
    
    static associate(models) {
      Alat.hasOne(models.Peminjaman, {
        foreignKey: "alatId",
        as: "alat",
      });
    }
  }
  Alat.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      kode_alat: {
        type: DataTypes.STRING(10),
      },
      nama_alat: {
        type: DataTypes.STRING(50),
      },
      kategori: {
        type: DataTypes.ENUM("hardware", "olahraga", "kebersihan"),
      },
      kondisi: {
        type: DataTypes.ENUM("bagus", "rusakringan", "rusakberat"),
      },
      foto_alat: {
        type: DataTypes.STRING,
      },
      lokasi: {
        type: DataTypes.STRING,
      },
      stok: {
        type: DataTypes.INTEGER,
      }
    },
    {
      sequelize,
      modelName: "Alat",
      tableName: "alat",
      timestamps: false,
    },
  );
  return Alat;
};
