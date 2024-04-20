// app/models/generoModel.js
const db = require('../database/db');

class GeneroModel {
  getAllGeneros(callback) {
    db.query('SELECT * FROM Genero', callback);
  }

  getGeneroById(id, callback) {
    db.query('SELECT * FROM Genero WHERE id_genero = ?', [id], callback);
  }

  addGenero(generoData, callback) {
    db.query('INSERT INTO Genero SET ?', [generoData], callback);
  }

  updateGenero(id, generoData, callback) {
    db.query('UPDATE Genero SET ? WHERE id_genero = ?', [generoData, id], callback);
  }

  deleteGenero(id, callback) {
    db.query('DELETE FROM Genero WHERE id_genero = ?', [id], callback);
  }
}

module.exports = new GeneroModel();