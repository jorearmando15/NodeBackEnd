const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const generoRoutes = require('./routes/generoRoutes');
const directorRoutes = require('./routes/directorRoutes');
const productoraRoutes = require('./routes/productoraRoutes');
const tipoRoutes = require('./routes/tipoRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const { PORT } = require('./config');


const app = express();

// Habilitar CORS para permitir solicitudes desde cualquier origen
app.use(cors({
  origin: REACT_APP_BACKEND_URL
}));


// Convertidor para formato Json
app.use(bodyParser.json());

// Route para la ruta principal
app.get('/', (req, res) => {
  res.send('Hola mundo!');
});

// Routes para Genero
app.use('/genero', generoRoutes);

// Routes para Director
app.use('/director', directorRoutes);

// Routes para Productora
app.use('/productora', productoraRoutes);

// Routes para Tipo
app.use('/tipo', tipoRoutes);

// Routes para Media
app.use('/media', mediaRoutes);
app.use('/almacenar/imagen_portada', express.static('almacenar/imagen_portada'));


// Obtener routes para diferentes entidades
app.listen(PORT);
  console.log('Servidor escuchando en', PORT);
