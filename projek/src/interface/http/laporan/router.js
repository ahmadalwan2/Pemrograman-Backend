const express = require('express');
const router = express.Router();
const { 
  getLaporan, 
  getByIdLaporan, 
  createLaporan, 
  patchLaporan, 
  deleteLaporan 
} = require('./controller.js');

router.get('/', getLaporan);
router.post('/:id', getByIdLaporan);
router.post('/tambah', createLaporan);
router.patch('/update', patchLaporan);
router.delete('/:id', deleteLaporan);

module.exports = router;
