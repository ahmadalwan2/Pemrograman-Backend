const db = require('../../../interface/db/models/index.js');
const { Teknisi } = db;

const tampilTeknisi = async () => {
    return await Teknisi.findAll();
};

const cariIdTeknisi = async (id) => {
    return await Teknisi.findByPk(id);
};

const tambahTeknisi = async (teknisi) => { 
    return await Teknisi.create(teknisi); 
};

const ubahTeknisi = async (id, data) => {
    const updateData = await Teknisi.findByPk(id);

    if (!updateData) return null; {
        await updateData.update(data);
        return updateData;
    };
};

const hapusTeknisi = async (id) => {
    const teknisi = await Teknisi.findByPk(id);
    if (!teknisi) return null; 

       await teknisi.destroy() ;
       return teknisi;
}

module.exports = {tampilTeknisi, cariIdTeknisi, tambahTeknisi, ubahTeknisi, hapusTeknisi};

