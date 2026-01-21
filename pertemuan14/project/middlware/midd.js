    /**
     * Jangan lupa di import data yang dari middelware
     */

const data = require("../models/data.js");

const cekId = (req, res, next) => {
    /**
     * Menangkap id nya user contoh:
     * /body/5
     * <<< >>>
     * Diparshing dulu make parseInt soalnya kan beda typenya
     */
        const id = parseInt(req.params.id); 
        const findId = data.find((fin) => fin.id === id);

        if (!findId) {
            return res.status(404).json({ message: "Data tidak ditemukan"});
        }
        next();
};

module.exports = { cekId };