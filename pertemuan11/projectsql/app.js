import express from "express";
import router from "./routers/userRouters.js";
import { errorHandler } from "./middleWare/userMiddleware.js";
import { cekKoneksi } from "./config/db.js";
// import { getUser  } from "./controller/userController.js";
// import { koneksi, cekKoneksi } from "./config/db.js";

const app = express();
const PORT = 4001;

// Buatkan endpoint untuk cek hasil dari koneksi
// Jangan lupa make async juga disini
// app.get("/cekdb", async (req, res) => {
//         const hasil = await cekKoneksi();
//         if (hasil) {
//             return res.status(200).json({message: "Koneksi berhasil"});
//         }
//         return res.status(500).json({message: "Koneksi tidak berhasil"});
// });

// app.get("/user", getUser);

app.get("/cekdb", async(req, res, next) => {
    try {
        const hasil = await cekKoneksi();

        if (hasil) {
            return res.status(200).json({message: "Data berhasil ditampilkan"});
        }
        return res.status(500).json({ message: "Data tidak ditemukan" });
    } catch (error) {
        next(error);
    }
});


app.use("/user", router);
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`server sedang berjalan di port ${{ PORT }}`);
});