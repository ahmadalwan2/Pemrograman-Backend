const express = require("express");
const sequelize = require("./koneksi.js");

const app = express();
const PORT = 3005;

app.get("/", async (req, res) => {
    try {
        await sequelize.authenticate();
        return res.json({ message: "Database berhasil ditampilkan"});
    } catch (error) {
        return res.json({ message: error.message});
    }
});



app.listen(PORT, () => {
    console.log(`Server sedang berjalan di port ${PORT}`);
})