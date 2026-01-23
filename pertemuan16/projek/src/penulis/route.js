const express = require ("express");
const {getPenulis, getById, createPenulis, deletePenulis, updatePenulis} = require ("./controller.js");
const cekPenulis = require ("./middleware.js");

const router = express.Router();

router.get("/", getPenulis);
router.get("/:id", cekPenulis, getById);
router.post("/tambah", createPenulis);
router.patch("/ubah/:id", cekPenulis, updatePenulis);
router.delete("/hapus/:id", deletePenulis);

module.exports = router;