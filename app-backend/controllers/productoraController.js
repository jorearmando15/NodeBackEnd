// app/controllers/productoraController.js
const ProductoraModel = require('../models/productoraModel');

class ProductoraController {
  async getAllProductoras(req, res) {
    console.log('Recibida solicitud para obtener todos los Productoras');

    ProductoraModel.getAllProductoras((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(result);
      }

    });
  }

  async getProductoraById(req, res) {
    const id = req.params.id;
    ProductoraModel.getProductoraById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(result[0]);
      }
    });
  }

  async addProductora(req, res) {
    const productoraData = req.body;
    ProductoraModel.addProductora(productoraData, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Productora agregado correctamente' });
      }
    });
  }

  async updateProductora(req, res) {
    const id = req.params.id;
    const productoraData = req.body;
    ProductoraModel.updateProductora(id, productoraData, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Productora actualizado correctamente' });
      }
    });
  }

  async deleteProductora(req, res) {
    const id = req.params.id;
    ProductoraModel.deleteProductora(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Productora eliminado correctamente' });
      }
    });
  }
}

module.exports = new ProductoraController();
