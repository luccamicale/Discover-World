// app.js
const express = require('express');
const dbconnect = require('./config');
const City = require('./city'); // Importa el modelo City
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('¡Las mejores 30 ciudades del mundo');
});

app.get('/cities', async (req, res) => {
  try {
    const cities = await City.find({}, '_id nombre');
    res.json(cities);
  } catch (error) {
    console.error('Error al obtener datos de la base de datos:', error.message);
    res.status(500).send('Error interno del servidor');
  }
});

app.get('/cities/:cityId', async (req, res) => {
  const cityId = req.params.cityId;

  try {
    const city = await City.findById(cityId);
    if (!city) {
      return res.status(404).json({ mensaje: 'Ciudad no encontrada' });
    }

    res.json(city);
  } catch (error) {
    console.error('Error al obtener detalles de la ciudad:', error.message);
    res.status(500).send('Error interno del servidor');
  }
});



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

dbconnect();
