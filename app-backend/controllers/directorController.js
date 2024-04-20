// app/controllers/directorController.js
const DirectorModel = require('../models/directorModel');

class DirectorController {
  async getAllDirectores(req, res) {
    console.log('Recibida solicitud para obtener todos los Directores');

    DirectorModel.getAllDirectores((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(result);
      }

    });
  }

  async getDirectorById(req, res) {
    const id = req.params.id;
    DirectorModel.getDirectorById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(result[0]);
      }
    });
  }

  async addDirector(req, res) {
    const directorData = req.body;
    DirectorModel.addDirector(directorData, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Director agregado correctamente' });
      }
    });
  }

  async updateDirector(req, res) {
    const id = req.params.id;
    const directorData = req.body;
    DirectorModel.updateDirector(id, directorData, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Director actualizado correctamente' });
      }
    });
  }

  async deleteDirector(req, res) {
    const id = req.params.id;
    DirectorModel.deleteDirector(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Director eliminado correctamente' });
      }
    });
  }
}

module.exports = new DirectorController();
