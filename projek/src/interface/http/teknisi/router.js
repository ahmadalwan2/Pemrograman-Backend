const express = require ("express");
const {getTeknisi, getByIdTeknisi, createTeknisi, updateTeknisi, deleteTeknisi} = require ('./controller.js');
const {cekIdTeknisi} = require ('../../../shared/middlewares/middlware.js');

const router = express.Router();

router.get('/', getTeknisi);
router.get('/:id', cekIdTeknisi, getByIdTeknisi);
router.post('/', createTeknisi);
router.put('/:id', updateTeknisi);
router.delete('/:id', deleteTeknisi);

module.exports = router;

