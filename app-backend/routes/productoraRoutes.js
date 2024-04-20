// app/routes/productoraRoutes.js
const express = require('express');
const productoraController = require('../controllers/productoraController');

const router = express.Router();

router.get('/', productoraController.getAllProductoras);
router.get('/:id', productoraController.getProductoraById);
router.post('/', productoraController.addProductora);
router.put('/:id', productoraController.updateProductora);
router.delete('/:id', productoraController.deleteProductora);

module.exports = router;

