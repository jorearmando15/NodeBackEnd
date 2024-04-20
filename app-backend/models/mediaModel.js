const db = require('../database/db');

class MediaModel {
  getAllMedia(callback) {
    
   // Mostrará los datos con el ID de cada uno
   // db.query('SELECT * FROM Media', callback);

    const query = `
        SELECT
        Media.id_media,
        Media.titulo,
        Media.sinopsis,
        Media.url_pelicula,
        Media.imagen_portada,
        Media.anno_estreno,
        Genero.nombre AS genero,
        Director.nombre AS director,
        Productora.nombre AS productora,
        Tipo.nombre AS tipo
      FROM
      Media
      JOIN Genero ON Media.id_genero = Genero.id_genero
      JOIN Director ON Media.id_director = Director.id_director
      JOIN Productora ON Media.id_productora = Productora.id_productora
      JOIN Tipo ON Media.id_tipo = Tipo.id_tipo;`;

    db.query(query, callback);

  }

  getMediaById(id, callback) {
    db.query('SELECT * FROM Media WHERE id_media = ?', [id], callback);
  }

  addMedia(mediaData, callback) {
    db.query('INSERT INTO Media SET ?', [mediaData], callback);
  }
  
  updateMedia(id, mediaData, callback) {
    db.query('UPDATE Media SET ? WHERE id_media = ?', [mediaData, id], callback);
  }

  deleteMedia(id, callback) {
    db.query('DELETE FROM Media WHERE id_media = ?', [id], callback);
  }
}

module.exports = new MediaModel();
