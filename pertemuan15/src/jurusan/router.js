const express = require('express');
const router = express.Router();
const { getAll, getById, deleteId, updateId, createJurusan } = require('./controller.js');

router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', updateId);
router.post('/tambah', createJurusan);
router.delete('/:id', deleteId);

module.exports = router;