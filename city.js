// Ejemplo del modelo actualizado
const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: String,
  attractions: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      name: String,
      description: String
    }
  ]
});

const City = mongoose.model('City', citySchema);

module.exports = City;
