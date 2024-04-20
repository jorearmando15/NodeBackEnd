// app/models/generoModel.js
const db = require('../database/db');

class ProductoraModel {
  getAllProductoras(callback) {
    db.query('SELECT * FROM Productora', callback);
  }

  getProductoraById(id, callback) {
    db.query('SELECT * FROM Productora WHERE id_productora = ?', [id], callback);
  }

  addProductora(productoraData, callback) {
    db.query('INSERT INTO Productora SET ?', [productoraData], callback);
  }

  updateProductora(id, productoraData, callback) {
    db.query('UPDATE Productora SET ? WHERE id_productora = ?', [productoraData, id], callback);
  }

  deleteProductora(id, callback) {
    db.query('DELETE FROM Productora WHERE id_productora = ?', [id], callback);
  }
}

module.exports = new ProductoraModel();
