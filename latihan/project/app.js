import express from "express";
import { router } from "./route/produkRoute.js";

const app = express();
app.use(express.json()); // Ini buat req.body
const PORT = 3000;

app.get("/", async (req, res) => {
    const cek = await cekKoneksi();
    if (cek) {
        return res.status(200).json({message: "Data berhasil ditampilkan"});
    }
    return res.status(500).json({message: "Data tidak ditemukan"})
})

app.use("/api/produk", router);
app.use("/api/produk/tambah", router);

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
})