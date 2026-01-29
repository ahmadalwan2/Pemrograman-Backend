const { Peserta } = require('../db/models');

const getAll = async (req, res) => {
        try {
            const data = await Peserta.findAll({ 
            include: 'Jurusan' 
    });
            res.status(200).json({ success: true, data });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};
const getById = async (req, res) => {
        try {
            const data = await Peserta.findByPk(req.params.id, { 
                include: 'Jurusan' 
    });
        if (!data) return res.status(404).json({ success: false, message: 'Peserta tidak ditemukan' });
            res.status(200).json({ success: true, data });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};
const createPeserta = async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ success: false, message: 'Data update tidak boleh kosong '});
        }

        const { nama_peserta, email, jurusanId } = req.body;

        if (!nama_peserta) {
        return res.status(400).json ({success: false, message: 'Nama peserta wajib diisi'});
        } // ini jika nama ga diisi

        if (!email) {
        return res.status(400).json ({success: false, message: 'Email wajib diisi'});
        } // ini jika nama ga diisi

        if (!jurusanId) {
        return res.status(400).json ({success: false, message: 'Jurusan wajib diisi'});
        } // ini jika nama ga diisi                

        const newPeserta = await Peserta.create({
                nama_peserta, email, jurusanId
        });
            return res.status(201).json ({success: true, message: 'Data peserta berhasil dibuat',  newPeserta})
    } catch (error) {
        res.status(500).json({success: false, message: 'Server error', error: error.message});
    }
};
const updatePeserta = async (req, res) => {
        try {
            const data = await Peserta.findByPk(req.params.id);
        if (!data) return res.status(404).json({ success: false, message: 'Peserta tidak ditemukan' });

        await data.update(req.body);
            res.status(200).json({ success: true, data });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};
const deletePeserta = async (req, res) => {
        try {
            const data = await Peserta.findByPk(req.params.id);
        if (!data) return res.status(404).json({ success: false, message: 'Peserta tidak ditemukan' });

        await data.destroy();
            res.status(200).json({ success: true, message: 'Peserta berhasil dihapus' });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

module.exports = { getAll, getById, updatePeserta, deletePeserta, createPeserta };

