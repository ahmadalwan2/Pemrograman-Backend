'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jurusan extends Model {

    static associate(models) {
        this.hasMany(models.Peserta, {
        foreignKey: 'jurusanId'
        });
    }
  }
  Jurusan.init({
    id_jurusan:  {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nama_jurusan: {
        type: DataTypes.STRING(50),
        allowNull: false,
      }
  }, {
    sequelize,
    modelName: 'Jurusan', /*
                          *     Hasil generate bawaan dari sequelize itu berakhiran s, 
                          *     Makanya disesuaikan lagi tableName dan tableName
                          */
    tableName: 'jurusan',
    timestamps: false // makenya false, klo gapunya kolom waktu di tablenya
  }

  );
  return Jurusan;
};
