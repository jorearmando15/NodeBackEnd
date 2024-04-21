// Requiere el módulo mysql2
const mysql = require('mysql2');

// Define las variables de configuración
const REACT_APP_BACKEND_URL = "*";
const PORT = process.env.PORT || 3200;
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '12345678';
const DB_DATABASE = process.env.DB_DATABASE || 'db_peliculas_series';
const DB_PORT = process.env.DB_PORT || 3306;

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

// Exporta las variables de configuración y la conexión a la base de datos
module.exports = {
  PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_PORT,
  REACT_APP_BACKEND_URL,
  db // Exporta la conexión a la base de datos también
};
