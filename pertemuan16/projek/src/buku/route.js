const express = require ("express");
const {getBuku, getById, createBuku, deleteBuku, updateBuku} = require ("./controller.js");
const cekBuku = require ("./middleware.js");

const router = express.Router();

router.get("/", getBuku);
router.get("/:id", cekBuku, getById);
router.post("/tambah", createBuku);
router.patch("/ubah/:id", updateBuku);
router.delete("/hapus/:id", cekBuku, deleteBuku);

module.exports = router;