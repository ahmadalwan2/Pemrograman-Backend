'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laporan extends Model {

    static associate(models) {
        Laporan.belongsTo(models.Teknisi, {
            foreignKey: "teknisiId",
            as: "Laporan"
        });
    }
  }
  Laporan.init({
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        nama_pelapor: {
           type: DataTypes.STRING(50)
        },
        kelas: {
          type: DataTypes.ENUM('ppw', 'ppm', 'psj'),
          allowNull: false,
        },
        deskripsi: {
          type: DataTypes.TEXT,
        },
        foto_kerusakan: {
          type: DataTypes.STRING(255),
        },
        tgl_lapor: {
          type: DataTypes.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        },
        status: {
          type: DataTypes.ENUM('menunggu', 'diproses', 'selesai'),
          defaultValue: 'menunggu'
        },
        teknisiId: {
          type: DataTypes.INTEGER,
          references: {
            model: "Teknisi",
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "RESTRICT"
        }
  },
  {      
    sequelize,
      modelName: "Laporan",
      tableName: "laporan",
      timestamps: true
      },  
  );
  return Laporan;
};