// app/routes/generoRoutes.js
const express = require('express');
const generoController = require('../controllers/generoController');

const router = express.Router();

router.get('/', generoController.getAllGeneros);
router.get('/:id', generoController.getGeneroById);
router.post('/', generoController.addGenero);
router.put('/:id', generoController.updateGenero);
router.delete('/:id', generoController.deleteGenero);

module.exports = router;
// Similar para los demás routes (directorRoutes.js, productoraRoutes.js, tipoRoutes.js, mediaRoutes.js)

