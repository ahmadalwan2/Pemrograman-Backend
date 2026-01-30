const {tampilTeknisi, cariIdTeknisi, tambahTeknisi, ubahTeknisi, hapusTeknisi} = require('./service.js');
const {resSukses, resGagal } = require ('../../../shared/helpers/payload.js');

const getTeknisi = async (req, res) => {
    try {
        const data = await tampilTeknisi();
        return resSukses (res, 200, "success", "Data teknisi berhasil ditampilkan", data);
    } catch (error) {
        return resGagal (res, 500, "error", error.message);
    }
};

const getByIdTeknisi =  async (req, res) => {
        try {
            const id = req.params.id;
            const data = await cariIdTeknisi(id);
            return resSukses(res, 200, "success", "Data id berhasil ditampilkan", data);
        } catch (error) {
            return resGagal(res, 500, "error", error.message);
        }
};

const createTeknisi = async (req, res) => {
        try {
            const payloadData = req.body;
            const data = await tambahTeknisi(payloadData);

            return resSukses (res, 201, "success", "Data teknisi berhasil ditambahkan", data);
        } catch (error) {
            return resGagal(res, 500, "error", error.message);
        }
};

const updateTeknisi = async (req, res) => {
    try {
        const id = req.params.id;
        const payloadData = req.body;
        const data = await ubahTeknisi(id, payloadData);

        if (!data) {
            return resGagal (res, 404, "error", "Data teknisi tidak ditemukan");
        };

        return resSukses (res, 200, "success", "Data teknisisi berhasil diubah", data);
    } catch (error) {
        return resGagal (res, 500, "error", error.message);
    }
};

const deleteTeknisi = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await hapusTeknisi(id);

        if (!data) {
            return resGagal (res, 404, "error", "Data teknisi tidak ditemukan");
        };
            return resSukses (res, 200, "success", "Data teknisi berhasil dihapus", data);
    } catch (error) {
            return resGagal (res, 500, "error", error.message);
    }
};


module.exports = {getTeknisi, getByIdTeknisi, createTeknisi, updateTeknisi, deleteTeknisi};

