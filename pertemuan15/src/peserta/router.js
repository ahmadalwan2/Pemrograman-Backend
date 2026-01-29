const express = require('express');
const router = express.Router();
const { getAll, getById, updatePeserta, deletePeserta, createPeserta } = require('./controller');

router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', updatePeserta);
router.post('/tambah', createPeserta);
router.delete('/:id', deletePeserta);

module.exports = router;