const db = require ("../../interface/db/models/index.js");
const {Teknisi} = db;
const { resSukses, resGagal } = require ("../helpers/payload.js");

const cekIdTeknisi = async (req, res, next) => {
        try {
            const id = req.params.id;
            const data = await Teknisi.findByPk(id);
            
            if (!data) {
                return resGagal (res, 404, "error", "Data id tidak ditemukan");
            }
            req.data = data;
            next();
        } catch (error) {
                return resGagal (res, 500, "error", error.message);
        }
};

const cekNamaTeknisi = async (req, res, next) => {
        try {
            const { nama_teknisi } = req.body;
            
            if (!nama_teknisi) {
                return resGagal (res, 404, "error", "Nama teknisi wajib diisi");
            };

            next();
        } catch (error) {
                return resGagal (res, 500, "error", "Terjadi Kesalahan, harap coba lagi");
        }
}



module.exports = {cekIdTeknisi, cekNamaTeknisi};