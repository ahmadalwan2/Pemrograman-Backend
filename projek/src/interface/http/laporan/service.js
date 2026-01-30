const db = require('../../../interface/db/models/index.js');
const { Laporan } = db;

const tampilLaporan = async () => { 
    return await Laporan.findAll(); 
};

const cariIdLaporan = async (id) => { 
    return await Laporan.findByPk(id); 
};

const tambahLaporan = async (laporan) => { 
    return await Laporan.create(laporan); 
};

const ubahLaporan = async (id, data) => { 
    const laporan = await Laporan.findByPk(id); 
    if (!laporan) return null;  
    await laporan.update(data, { fields: Object.keys(data) }); 
    return Laporan;
};

const hapusLaporan = async (id) => { 
    const laporan = await Laporan.findByPk(id); 

    if (!laporan) return null; 
    const deletedData = { ...laporan.dataValues };  
    await laporan.destroy(); 
    return deletedData; 
};

module.exports = {tampilLaporan, tambahLaporan, ubahLaporan, hapusLaporan, cariIdLaporan};