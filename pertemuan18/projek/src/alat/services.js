const db = require ('../db/models/index.js');
const { Alat } = db;

const tambahAlat = async (body) => {
    return await Alat.create(body);
};

const cariId = async (id) => {
    return await Alat.findByPk(id);
};

const ubahAlat = async (id, body) => {
    const alat = await Alat.findByPk(id);
    if (!alat) return null; {      
    return await alat.update(body);
    }
};

const hapusAlat = async (id) => {
    return await Alat.destroy({
        where: {id},
    });
};

const tampilAlat = async () => {
    return await Alat.findAll();
};

module.exports = {tampilAlat, tambahAlat, cariId, ubahAlat, hapusAlat};