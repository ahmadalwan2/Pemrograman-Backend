const express = require ("express");
const findId = require("../controller/controller.js");
const namalain = require("../middlware/midd.js");

const router = express.Router();

/**
 * Kalo targetnya itu params, maka tandanya : (titik dua)
 * Kalo targetnya itu query, maka tandanya ada ?key= (pas ngecek di postman)
 */

router.get("/cari/:id",namalain.cekId, findId);

module.exports = router;