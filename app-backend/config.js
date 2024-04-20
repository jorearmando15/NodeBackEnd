// Define las variables de configuración
const PORT = process.env.PORT || 3200;
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '12345678';
const DB_DATABASE = process.env.DB_DATABASE || 'db_peliculas_series';
const DB_PORT = process.env.DB_PORT || 3306;

// Exporta las variables de configuración
module.exports = {
  PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
};
