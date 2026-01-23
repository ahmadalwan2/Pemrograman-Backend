const db = require ("../db/models/index.js");
const { Penulis } = db;

const tampilPenulis = async () => {
        return await Penulis.findAll();
};

const tambahPenulis = async (body) => {
        return await Penulis.create(body);
};

const cariIdPenulis = async (id) => {
        return await Penulis.findByPk(id);
};

const ubahPenulis = async (id, body) => {
        const data = await Penulis.findByPk(id);
        
        if (!data) {
            return null;
        }
        
        await data.update(body);
        return data;
};

const hapusPenulis = async  (id) => {
        return await Penulis.destroy({
            where: { id }
        });
};

module.exports = { tampilPenulis, tambahPenulis, cariIdPenulis, ubahPenulis, hapusPenulis };
