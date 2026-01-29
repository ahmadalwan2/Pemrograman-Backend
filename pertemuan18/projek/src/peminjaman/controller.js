const  { tambahPeminjaman, tampilPeminjaman, cariPeminjaman, ubahPeminjaman, hapusPeminjaman } = require ('./services.js');

const createPeminjaman = async (req, res) => {
    try {
        const body = {
            ...req.body,
            foto_pinjam: req.files?.foto_pinjam?.[0]?.filename || null,
            foto_kembali: req.files?.foto_kembali?.[0]?.filename || null,
        };
        const data = await tambahPeminjaman(body);
        return res.status(201).json({message: "Data berhasil ditambahkan", data});
    } catch (error) {
        return res.status(500).json({message: error.message});
    };
};

const getAll = async (req, res) => {
    try {
        const data = await tampilPeminjaman();
        return res.status(200).json({message: "Data berhasil ditampilkan semua", data});
    } catch (error) {
        return res.status(500).json({message: error.message});
    };
};

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await cariPeminjaman(id);

        if (!data) {
            return res.status(404).json({message: "ID ini tidak ditemukan", data});        
        };
        return res.status(200).json({message: "Data berhasil ditampilkan berdasarkan id", data});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const updatePinjaman = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
        return res.status(400).json({message: "ID tidak dikirim"});
        };

        const dataPinjaman = {
            ...req.body,
        foto_pinjam: req.files?.foto_pinjam?.[0]?.filename || null,
        foto_kembali: req.files?.foto_kembali?.[0]?.filename || null,
        };
        
        const data = await ubahPeminjaman(id, dataPinjaman);

        if (!data) {
        return res.status(500).json({message: "Gagal diupdate", data});
        };

        return res.status(200).json({message: "Data berhasil diubah", data});        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const deletePinjaman = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await hapusPeminjaman(id);

        if (!data) {
        return res.status(500).json({message: "ID tidak ditemukan", data});
        };
        return res.status(200).json({message: "Data ini berhasil dihapus", data});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

module.exports = {createPeminjaman, getAll, getById, updatePinjaman, deletePinjaman};