'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teknisi extends Model {
        
    static associate(models) {
        Teknisi.hasMany(models.Laporan, {
          foreignKey: "teknisiId",
          as:"laporan"
        });
    }
  }
  Teknisi.init({        
        id: {
          allowNull:false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        nama_teknisi: {
          allowNull: false,
          type: DataTypes.STRING(50)
        },
        no_hp: {
          type: DataTypes.STRING(15),
        },
        email: {
          type: DataTypes.STRING(100),
          unique: true
        },
        spesialisasi: {
          type: DataTypes.ENUM('umum', 'jaringan', 'programmer'),
          defaultValue: 'umum'
        }

  },
  {      
    sequelize,
      modelName: "Teknisi",
      tableName: "teknisi",
      timestamps: true
      },
  );
  return Teknisi;
};