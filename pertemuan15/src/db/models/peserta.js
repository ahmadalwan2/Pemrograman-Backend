'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peserta extends Model {

    static associate(models) {
        Peserta.belongsTo(models.Jurusan, {
          foreignKey: "jurusanId",
          as: "Jurusan"
        });
    }
  };
  Peserta.init({
      id_peserta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nama_peserta: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active",
      },
      jurusanId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'jurusan',
            key: 'id_jurusan'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
  }, {
    sequelize,
    modelName: 'Peserta',
    tableName: 'peserta',
    timestamps: false
  });
  return Peserta;
};

