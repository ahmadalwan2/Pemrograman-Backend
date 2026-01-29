const fs = require ('fs');
const path = require ('path');
const {tampilAlat, tambahAlat, cariId, ubahAlat, hapusAlat} = require ('./services.js');

const createAlat = async (req, res) => {
    try {
        const { kode_alat, nama_alat, kategori, kondisi,lokasi, stok } = req.body;

        let foto_alat = null 
        if (req.file) {
            // console.log(req.file);

            foto_alat = path.basename(req.file.path);
        }

        const body = { kode_alat, nama_alat, kategori, kondisi, foto_alat, lokasi, stok };

        await tambahAlat(body);
        return res.status(201).json({ message: "Data berhasil ditambahkan"});

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getAlat = async (req, res) => {
    try {
        const data = await tampilAlat();
        return res.status(200).json({message: "Data berhasil ditampilkan semua",data})
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
const getByIdAlat = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await cariId(id);
        if (!data) {
            return res.status(404).json({message: "ID ini tidak ditemukan", data})
        }
        return res.status(200).json({message: "Data berhasil ditampilkan berdasarkan id", data});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};


const updateAlat = async (req, res) => {
    try {
        const id = req.params.id;
        const dataAlat = req.body;
        const data = await ubahAlat(id, dataAlat);

        if (!data) {
        return res.status(500).json({message: "Gagal diupdate", data});
        };

        return res.status(200).json({message: "Data berhasil diubah", data});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const deleteAlat = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await hapusAlat(id);

        if (!data) {
        return res.status(500).json({message: "ID tidak ditemukan", data});
        };
        return res.status(200).json({message: "Data ini berhasil dihapus", data});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

module.exports = {getAlat, createAlat, getByIdAlat, updateAlat, deleteAlat};