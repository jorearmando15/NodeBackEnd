// Requiere las variables de configuración
const {
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD, 
  DB_HOST,
  DB_PORT
} = require('../config');

// Requiere el módulo mysql2
const mysql = require('mysql2');

// Crea la conexión a la base de datos
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT
});

// Intenta conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.message);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// No exportes directamente la conexión a la base de datos, 
// ya que queremos asegurarnos de que la conexión se haya realizado antes de usarla.
// En su lugar, exporta la función que devuelve la conexión.
module.exports = {
  db
};
