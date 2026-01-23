const db = require ("../db/models/index.js");
const { resSukses, resGagal } = require("../helpers/payload.js");
const { Kategori } = db;

const cekKategori = async (req, res, next) => {
        try {
            const id = req.params.id;
            const data = await Kategori.findByPk(id);
            
            if (!data) {
                return resGagal (res, 404, "error", "Data id tidak ditemukan");
            }
            req.data = data;
            next();
        } catch (error) {
                return resGagal (res, 500, "error", error.message);
        }
};

module.exports = cekKategori;