// app/controllers/tipoController.js
const TipoModel = require('../models/tipoModel');

class TipoController {
  async getAllTipos(req, res) {
    console.log('Recibida solicitud para obtener todos los Tipos');

    TipoModel.getAllTipos((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(result);
      }

    });
  }

  async getTipoById(req, res) {
    const id = req.params.id;
    TipoModel.getTipoById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(result[0]);
      }
    });
  }

  async addTipo(req, res) {
    const tipoData = req.body;
    TipoModel.addTipo(tipoData, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Tipo agregado correctamente' });
      }
    });
  }

  async updateTipo(req, res) {
    const id = req.params.id;
    const tipoData = req.body;
    TipoModel.updateTipo(id, tipoData, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Tipo actualizado correctamente' });
      }
    });
  }

  async deleteTipo(req, res) {
    const id = req.params.id;
    TipoModel.deleteTipo(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Tipo eliminado correctamente' });
      }
    });
  }
}

module.exports = new TipoController();
