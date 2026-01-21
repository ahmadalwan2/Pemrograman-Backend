/**
 * Cara praktik bagaimana cara membuat table lewat ORM
 * dengan konsep Code Firt
 * artinya membuat tabel tidak lewat phpMyadmin
 * tapi lewat sintaks JavaScript
 * <<< ==== ==== >>>
 * sekarang praktik membuat tabel di ORM sequelize
 * lalu tambahkan file konfig database
 */

const { DataTypes } = require('sequelize');
const sequelize = require("../../koneksi.js");

const User = sequelize.define("User", { // User 
    id: {
        type: DataTypes.INTEGER,       // tipe data kolom 'id' berupa bilangan bulat (integer)
        autoIncrement: true,           // nilai 'id' akan bertambah otomatis setiap insert data baru
        primaryKey: true,              // menjadikan 'id' sebagai primary key (unik, tidak boleh duplikat)
        allowNull: false,              // kolom 'id' wajib ada nilainya, tidak boleh kosong (NULL)
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
    },
    tambahan: {
      type: DataTypes.STRING,
    },    
},
/**
 * Ini adalah cara membuat table baru tanpa konsep plural dan singular
 * ciri-ciri type keduanya itu tanpa berakhiran s
 */
    {
        tableName: "User",
    }
);

/**
 * sync itu berfungsi untuk membuat table baru, jika belum dibuat sebelumnya
 * Kalau mau ada tambahan kolom, maka di sync nya ada tambahan {alter: true}
 * Ada juga { force: true}
 * Itu seperti kita menghapus table yang sudah pernah kita buat, lalu dibuat ulang beserta fieldnya
 */

sequelize.sync( {alter: true});
module.exports = User;

