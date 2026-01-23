const db = require("../db/models/index.js");
const { Kategori } = db;

const tampilKategori = async () => {

    /**
     * Ini ada 2 cara untuk make await nya
     */
        // const data = await Kategori.findAll();
        // return data;
        return await Kategori.findAll();
};

const tambahKategori = async (body) => {
        return await Kategori.create(body);
};

const cariIdKategori = async (id) => {
        return await Kategori.findByPk(id);
};

const ubahKategori = async (id, body) => {
        const data = await Kategori.findByPk(id);
        await data.update(body);
        return data;
};

const hapusKategori = async (id) => {
        return await Kategori.destroy({
                where: { id }
        });
}

module.exports = { tampilKategori, tambahKategori, cariIdKategori, ubahKategori, hapusKategori } 

