// app/routes/directorRoutes.js
const express = require('express');
const directorController = require('../controllers/directorController');

const router = express.Router();

router.get('/', directorController.getAllDirectores);
router.get('/:id', directorController.getDirectorById);
router.post('/', directorController.addDirector);
router.put('/:id', directorController.updateDirector);
router.delete('/:id', directorController.deleteDirector);

module.exports = router;

