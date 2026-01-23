const { tampilPenulis, tambahPenulis, cariIdPenulis, ubahPenulis, hapusPenulis } = require ("./service.js");
const { resSukses, resGagal } = require ("../helpers/payload.js");

const getPenulis = async (req, res) => {
        try {
            const data = await tampilPenulis();
            return resSukses(res, 200, "success", "Data penulis berhasil ditampilkan", data);
        } catch (error) {
            return resGagal(res, 500, "error", error.message);
        }
};
const getById = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await cariIdPenulis(id);
            return resSukses(res, 200, "success", "Data id berhasil ditampilkan", data);
        } catch (error) {
            return resGagal(res, 500, "error", error.message);
        }
};
const createPenulis = async (req, res) => {
        try {
            const {nama_penulis, alamat} = req.body;
            const body = {nama_penulis, alamat};
            const data = await tambahPenulis(body);
            return resSukses(res, 201, "success", "Data berhasil ditambahkan", data);
        } catch (error) {
            return resGagal(res, 500, "error", error.message);
        }
};

const deletePenulis = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await hapusPenulis(id);
            return resSukses(res, 200, "success", "Data berhasil dihapus", data);
        } catch (error) {
            return resGagal(res, 500, "error", error.message)
        }
};

const updatePenulis = async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;
            const data = await ubahPenulis(id, body);
            return resSukses (res, 200, "success", "Data berhasil diubah", data);
        } catch (error) {
            return resGagal (res, 500, "error", error.message);
        }
}
module.exports = { getPenulis, getById, createPenulis, deletePenulis, updatePenulis };
