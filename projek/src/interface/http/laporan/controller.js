const { tampilLaporan, cariIdLaporan, tambahLaporan, ubahLaporan, hapusLaporan } = require('./service.js');
const { resSukses, resGagal } = require('../../../shared/helpers/payload.js');

const getLaporan = async (req, res) => {
  try {
    const data = await tampilLaporan();
    return resSukses(res, 200, "success", "Data laporan berhasil ditampilkan", data);
  } catch (error) {
    return resGagal(res, 500, "error", error.message);
  }
};

const getByIdLaporan = async (req, res) => {
  try {
    const { id } = req.body;   
    const data = await cariIdLaporan(id);

    if (!data) {
      return resGagal(res, 404, "error", "Data laporan tidak ditemukan");
    }

    return resSukses(res, 200, "success", "Data laporan berdasarkan ID berhasil ditampilkan", data);
  } catch (error) {
    return resGagal(res, 500, "error", error.message);
  }
};


const createLaporan = async (req, res) => {
  try {
    const payload = req.body;  
    const data = await tambahLaporan(payload);

    return resSukses(res, 201, "success", "Data laporan berhasil ditambahkan", data);
  } catch (error) {
    return resGagal(res, 500, "error", error.message);
  }
};

const patchLaporan = async (req, res) => {
  try {
    const { id, ...payload } = req.body;  
    const data = await ubahLaporan(id, payload);

    if (!data) {
      return resGagal(res, 404, "error", "Data laporan tidak ditemukan");
    }

    return resSukses(res, 200, "success", "Data laporan berhasil diupdate", data);
  } catch (error) {
    return resGagal(res, 500, "error", error.message);
  }
};

const deleteLaporan = async (req, res) => {
  try {
    const { id } = req.body;   
    const data = await hapusLaporan(id);

    if (!data) {
      return resGagal(res, 404, "error", "Data laporan tidak ditemukan");
    }

    return resSukses(res, 200, "success", "Data laporan berhasil dihapus", data);
  } catch (error) {
    return resGagal(res, 500, "error", error.message);
  }
};

module.exports = {
  getLaporan,
  getByIdLaporan,
  createLaporan,
  patchLaporan,
  deleteLaporan
};
