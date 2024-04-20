// app/controllers/generoController.js
const GeneroModel = require('../models/generoModel');

class GeneroController {
  async getAllGeneros(req, res) {
    console.log('Recibida solicitud para obtener todos los géneros');

    GeneroModel.getAllGeneros((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(result);
      }

    });
  }

  async getGeneroById(req, res) {
    const id = req.params.id;
    GeneroModel.getGeneroById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(result[0]);
      }
    });
  }

  async addGenero(req, res) {
    const generoData = req.body;
    GeneroModel.addGenero(generoData, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Género agregado correctamente' });
      }
    });
  }

  async updateGenero(req, res) {
    const id = req.params.id;
    const generoData = req.body;
    GeneroModel.updateGenero(id, generoData, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Género actualizado correctamente' });
      }
    });
  }

  async deleteGenero(req, res) {
    const id = req.params.id;
    GeneroModel.deleteGenero(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Género eliminado correctamente' });
      }
    });
  }
}

module.exports = new GeneroController();