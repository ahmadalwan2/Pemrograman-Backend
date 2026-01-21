const data = require("../models/data.js");

/**
 * Buat fungsi di controller
 * Lalu buat respon 
 * 
 */

const tampilbyId = (req, res) => {

    const id = parseInt(req.params.id)
    const ketemu = data.find((ket) => ket.id === id);
        return res.status(200).json({ data: ketemu });
};

module.exports = tampilbyId;