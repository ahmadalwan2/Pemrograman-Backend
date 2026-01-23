const db = require ("../db/models/index.js");
const { Buku } = db;

const tampilBuku = async () => {
        return await Buku.findAll();
};

const tambahBuku = async (body) => {
        return await Buku.create(body);
};

const cariIdBuku = async (id) => {
        return await Buku.findByPk(id);
};

const ubahBuku = async (id, body) => {
        const data = await Buku.findByPk(id);
        await data.update(body);
        return data;
};

const hapusBuku = async (id) => {
        return await Buku.destroy({
                where: { id }
        });
}


module.exports = { tampilBuku, tambahBuku, cariIdBuku, ubahBuku, hapusBuku };