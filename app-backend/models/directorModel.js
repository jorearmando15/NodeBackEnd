// app/models/generoModel.js
const db = require('../database/db');

class DirectorModel {
  getAllDirectores(callback) {
    db.query('SELECT * FROM Director', callback);
  }

  getDirectorById(id, callback) {
    db.query('SELECT * FROM Director WHERE id_director= ?', [id], callback);
  }

  addDirector(directorData, callback) {
    db.query('INSERT INTO Director SET ?', [directorData], callback);
  }

  updateDirector(id, directorData, callback) {
    db.query('UPDATE Director SET ? WHERE id_director = ?', [directorData, id], callback);
  }

  deleteDirector(id, callback) {
    db.query('DELETE FROM Director WHERE id_director = ?', [id], callback);
  }
}

module.exports = new DirectorModel();
