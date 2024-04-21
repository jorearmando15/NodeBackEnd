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
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

// Intenta conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.message);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Exporta la conexión a la base de datos
module.exports = db;