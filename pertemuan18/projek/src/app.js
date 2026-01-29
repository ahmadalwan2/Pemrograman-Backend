require('dotenv').config();
const express = require("express");
const path = require('path');
const routerAlat = require ('../src/alat/router.js');
const routerPeminjam = require ('../src/peminjaman/router.js');
// const { sequelize } = require('./config/koneksi.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * express.static itu berfungsi untuk menampilkan file didalam browser
 * uploads itu adalah nama folder yang bisa diakses secara public
 * biasanya express.static itu untuk resource css, js, file
 * api adalah prefix 
 */
app.use("/api", express.static(path.join(__dirname, 'uploads')));
app.use('/api/alat', routerAlat);
app.use('/api/pinjam', routerPeminjam);

const PORT = process.env.PORT || 3010;

// app.get("/", async (req, res) => {
//         try {
//             await sequelize.authenticate();
//             res.json({message: "Koneksi berhasil"})
//         } catch (error) {
//             res.json({message: "Server gagal dijalankan"})
//         }
// })

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});

