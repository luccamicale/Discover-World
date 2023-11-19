// Ejemplo del modelo actualizado
const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  nombre: String,
  atracciones: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      nombre: String,
      descripcion: String
    }
  ]
});

const City = mongoose.model('City', citySchema);

module.exports = City;
