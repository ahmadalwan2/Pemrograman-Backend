const { resSukses , resGagal} = require("../helpers/payload.js");
const {tampilBuku, tambahBuku, cariIdBuku, ubahBuku, hapusBuku } = require ("./service.js");

const getBuku = async (req, res) => {
        try {
            const data = await tampilBuku();
            return resSukses(res, 200, "success", "Data Buku berhasil ditampilkan", data);
        } catch (error) {
            return resGagal (res, 500, "error", error.messasge);
        }
};

const getById = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await cariIdBuku(id);
            return resSukses (res, 200, "success", "Data buku berhasil ditampilkan", data);
        } catch (error) {
            return resGagal(res, 500, "error", error.messasge);
        }
};

const createBuku = async (req, res) => {
        try {
            const { judul, jml_halaman, ringkasan, harga, kategoriId, penulisId } = req.body;
            const body = { judul, jml_halaman, ringkasan, harga, kategoriId, penulisId };
            const data = await tambahBuku(body);
            return resSukses(res, 201, "success", "Data berhasil ditambahkan", data);
        } catch (error) {
            return resGagal(res, 500, "error", error.message);
        }
};

const deleteBuku = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await hapusBuku(id);
            return resSukses(res, 200, "success", "Data berhasil dihapus", data);
        } catch (error) {
            return resGagal(res, 500, "error", error.message);
        }
};

const updateBuku = async (req, res) => {
        try {
            const id = req.params.id;
            const { judul, jml_halaman, ringkasan, harga, kategoriId, penulisId } = req.body;
            const body = { judul, jml_halaman, ringkasan, harga, kategoriId, penulisId };
            const data = await ubahBuku(id, body);
            return resSukses(res, 200, "success", "Data berhasil diubah", data);
        } catch (error) {
            return resGagal(res, 500, "error", error.message);
        }
};

module.exports = {getBuku, getById, createBuku, deleteBuku, updateBuku};