const express = require("express");
const { getKategori, getById, createKategori, deleteKategori, updateKategori } = require("./controller.js");
const cekKategori = require ("./middleware.js");

const router = express.Router();

router.get("/", getKategori);
router.get("/:id", cekKategori, getById);
router.post("/tambah", createKategori);
router.patch("/ubah/:id", cekKategori, updateKategori);
router.delete("/hapus/:id", cekKategori, deleteKategori);

module.exports = router;