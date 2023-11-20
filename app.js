// app.js
const express = require('express');
const fs = require('fs'); // Nueva línea para manejar archivos
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Las mejores 20 ciudades del mundo!');
});

app.get('/cities', (req, res) => {
  try {
    const rawData = fs.readFileSync('db.json');
    const cities = JSON.parse(rawData);
    const cityNames = cities.map(city => ({ name: city.name }));
    res.json(cityNames);
  } catch (error) {
    console.error('Error al obtener datos del archivo JSON:', error.message);
    res.status(500).send('Error interno del servidor');
  }
});

app.get('/cities/:cityName', (req, res) => {
  const cityName = req.params.cityName;

  try {
    const rawData = fs.readFileSync('db.json');
    const cities = JSON.parse(rawData);

    const city = cities.find(city => city.name === cityName);

    if (!city) {
      return res.status(404).json({ mensaje: 'Ciudad no encontrada' });
    }

    res.json(city.attractions);
  } catch (error) {
    console.error('Error al obtener detalles de la ciudad desde el archivo JSON:', error.message);
    res.status(500).send('Error interno del servidor');
  }
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
