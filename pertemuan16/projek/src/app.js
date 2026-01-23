const express = require("express");
const sequelize = require("./config/koneksi.js");
const routerKategori = require("./kategori/route.js");
const routerPenulis = require("./penulis/route.js");
const routerBuku = require("./buku/route.js");

const app = express();
const PORT = 3008;
const host = "127.0.0.1";

app.use(express.json()); // ini untuk di raw body postman
app.use(express.urlencoded({ extended: true })); // ini jika mau ngisinya di raw name
app.use("/api/kategori", routerKategori);
app.use("/api/penulis", routerPenulis);
app.use("/api/buku", routerBuku);

app.get("/", async (req, res) => {
  try {
    await sequelize.authenticate();
    return res.status(200).json({ message: "Database berhasil terkoneksi" });
  } catch (error) {
    return res.json({ message: error.message });
  }
});

app.listen(PORT, async () => {
  console.log(`Server berjalan di ${host}: ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Database terkoneksi.");
  } catch (error) {
    console.error("Tidak bisa koneksi ke database:", error);
  }
});
