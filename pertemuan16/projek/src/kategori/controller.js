const  { tampilKategori, tambahKategori, cariIdKategori, ubahKategori, hapusKategori } = require("./service.js");
const { resSukses, resGagal } = require ("../helpers/payload.js");

const getKategori = async (req, res) => {
        try {
            const data = await tampilKategori();
            return resSukses(res, 200, "success", "Data Kategori berhasil ditampilkan", data);
        } catch (error) {
            return resGagal(res, 500, "error", error.message );
        }
};

const getById = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await cariIdKategori(id);
            return resSukses(res, 200, "success", "Data id berhasil ditampilkan", data);
        } catch (error) {
            return resGagal(res, 500, "error", error.message);
        }
};

const createKategori = async (req, res) => {
        try {
            const { nama_kategori } = req.body;
            const body = { nama_kategori };
            const data = await tambahKategori(body);
            return resSukses(res, 201, "success", "Data berhasil ditambahkan", data);
        } catch (error) {
            return resGagal(res, 500, "error", error.message);
        }
};

const deleteKategori = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await hapusKategori(id);
            return resSukses(res, 200, "success", "Data berhasil dihapus", data);
        } catch (error) {
            return resGagal(res, 500, "error", error.message);
        }
};

const updateKategori = async (req, res) => {
        try {
            const id = req.params.id;
            const { nama_kategori } = req.body;
            const body = { nama_kategori };
            const data = await ubahKategori(id, body);
            return resSukses(res, 200, "success", "Data berhasil diubah", data);
        } catch (error) {
            return resGagal(res, 500, "error", error.message);
        }
};

module.exports = { getKategori, getById, createKategori, deleteKategori, updateKategori };
