const express = require('express');
const mediaController = require('../controllers/mediaController');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./almacenar/imagen_portada");
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage });



router.get('/', mediaController.getAllMedia);
router.get('/:id', mediaController.getMediaById);
router.post('/', upload.single('imagen_portada'), mediaController.addMedia); 
router.put('/:id',  upload.single('imagen_portada'), mediaController.updateMedia);
router.delete('/:id', mediaController.deleteMedia);

module.exports = router;
