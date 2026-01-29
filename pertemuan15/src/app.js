const express = require('express');
const jurusanRouter  = require('./jurusan/router.js');
const pesertaRouter = require('./peserta/router.js');

const app = express();
const PORT = 3007;

app.use(express.json());

app.use('/jurusan', jurusanRouter);
app.use('/peserta', pesertaRouter);

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});