// app/routes/tipoRoutes.js
const express = require('express');
const tipoController = require('../controllers/tipoController');

const router = express.Router();

router.get('/', tipoController.getAllTipos);
router.get('/:id', tipoController.getTipoById);
router.post('/', tipoController.addTipo);
router.put('/:id', tipoController.updateTipo);
router.delete('/:id', tipoController.deleteTipo);

module.exports = router;
