require('dotenv').config();
const express = require("express");
const routerTeknisi = require ("./interface/http/teknisi/router.js");
const routerLaporan = require ("./interface/http/laporan/router.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3009;
app.use("/api/teknisi", routerTeknisi);
app.use("/api/laporan", routerLaporan);

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});

