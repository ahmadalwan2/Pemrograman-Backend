const express = require("express");
const  {createAlat, getAlat, getByIdAlat,updateAlat, deleteAlat}  = require("./controller.js");
const uploadAlat = require("./../middleware/uploadFile.js");
const router = express.Router();

router.get("/", getAlat);
router.get("/:id", getByIdAlat);
router.post("/create", uploadAlat.single("foto_alat"), createAlat);
router.patch("/ubah/:id", updateAlat);
router.delete("/hapus/:id", deleteAlat);

module.exports = router;
