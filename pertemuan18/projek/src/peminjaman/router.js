const express = require("express");
const  {createPeminjaman, getAll, getById, updatePinjaman, deletePinjaman}  = require("./controller.js");
const uploadAlat = require("./../middleware/uploadFile.js");
const router = express.Router();

router.get("/", getAll);
router.post("/create", uploadAlat.fields([
    {name: "foto_pinjam", maxCount: 1},
    {name: "foto_kembali", maxCount: 1},
]),
    createPeminjaman
);
router.patch("/ubah/:id", uploadAlat.fields([
    { name: "foto_pinjam", maxCount: 5 },
    { name: "foto_kembali", maxCount: 5 },    
]),
    updatePinjaman
);
router.delete("/hapus/:id", deletePinjaman);


module.exports = router;
