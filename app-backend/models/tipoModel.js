// app/models/tipoModel.js
const db = require('../database/db');

class TipoModel {
  getAllTipos(callback) {
    db.query('SELECT * FROM Tipo', callback);
  }

  getTipoById(id, callback) {
    db.query('SELECT * FROM Tipo WHERE id_tipo = ?', [id], callback);
  }
  
  addTipo(tipoData, callback) {
    db.query('INSERT INTO Tipo SET ?', [tipoData], callback);
  }

  updateTipo(id, tipoData, callback) {
    db.query('UPDATE Tipo SET ? WHERE id_tipo = ?', [tipoData, id], callback);
  }

  deleteTipo(id, callback) {
    db.query('DELETE FROM Tipo WHERE id_tipo = ?', [id], callback);
  }
}

module.exports = new TipoModel();
