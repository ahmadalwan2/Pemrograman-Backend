const db = require ('../db/models/index.js');
const { Peminjaman } = db;

const tambahPeminjaman = async (body) => {
    return await Peminjaman.create(body);
};

const tampilPeminjaman = async () => {
    return await Peminjaman.findAll();
};

const cariPeminjaman = async (id) => {
    return await Peminjaman.findByPk(id);
};

const ubahPeminjaman = async (id, body) => {
    const pinjam = await Peminjaman.findByPk(id);

    if (!pinjam) return null; {
        return await pinjam.update(body);
    };
};

const hapusPeminjaman = async (id) => {
    return await Peminjaman.destroy({
        where: {id},
    });
};

module.exports = { tambahPeminjaman, tampilPeminjaman, cariPeminjaman, ubahPeminjaman, hapusPeminjaman };