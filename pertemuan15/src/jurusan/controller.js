const { Jurusan } = require ('../db/models');

const getAll = async (req, res) => {
        try {
                const data = await Jurusan.findAll();
                res.status(200).json({ success: true, data})
        } catch (error) {
                res.status(500).json({ success: false, message: 'Server Error', error: error.message})
        }
};
const getById = async (req, res) => { 
        try { 
                const id = req.params.id;
                const data = await Jurusan.findByPk(id);
                res.status(200).json({ success: true, data }); 
        } 
        catch (error) { 
                res.status(500).json({error: error.message }); 
        } 
};
const updateId = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await Jurusan.findByPk(id);

        /**
         * Ini validasi jika id yang ditable tidak ditemukan
        */

        if (!data) { 
                return res.status(404).json({ success: false, message: 'Jurusan tidak ditemukan' 
        }); 
}
            await data.update(req.body); // Menjalankan update data jurusan berdasarkan input dari req.body
            res.status(200).json({ success: true, data }); 
        } catch (error) {
                res.status(500).json({ success: false, message: 'Server error', error: error.message});
        }
};
const createJurusan = async (req, res) => {
        try {
                
        if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ success: false, message: 'Data update tidak boleh kosong' });
        }

        const { nama_jurusan } = req.body;


        if (!nama_jurusan) {
        return res.status(400).json ({success: false, message: 'Nama jurusan wajib diisi'});
        } // ini jika nama ga diisi

        const newJurusan = await Jurusan.create({
                nama_jurusan
        });
        res.status(201).json ({ success: true, message: 'Data jurusan berhasil dibuat', newJurusan});
        } catch (error) {
        res.status(500).json ({success: false, message: 'Server error', error: error.message});
        }
};
const deleteId = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await Jurusan.findByPk(id);
            await data.destroy();
                res.status(200).json({ success: true, message: 'Jurusan berhasil dihapus' });
            if (!data)  {
                res.status(404).json ({ success: false, message: 'Jurusan tidak ditemukan'}) ;
            }
        } catch (error) {
            res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
};

module.exports = { getAll, getById, updateId, createJurusan, deleteId };