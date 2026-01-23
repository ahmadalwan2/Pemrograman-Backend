'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buku extends Model {

    static associate(models) {
      Buku.belongsTo(models.Kategori, {
        foreignKey: "kategoriId",
        as: "kategori",
      });


    Buku.belongsTo(models.Penulis, {
      foreignKey: "penulisId",
      as: "penulis",
    });
    }
  }
  Buku.init({
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      judul: {
        type: DataTypes.STRING(100),
      },
      jml_halaman: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ringkasan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      kategoriId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "kategori", // ini nama tabelnya
          key: "id", // ini primar_key dari table tersebut
        }
      },
      penulisId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "penulis",
          key: "id",
        }
      }
  },
    {
      sequelize,
      modelName: "Buku",
      tableName: "buku"
    },
  );
  return Buku;
};