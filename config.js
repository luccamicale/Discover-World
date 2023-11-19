const mongoose = require('mongoose');

const dbconnect = async () => {
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/cities", {});
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
    }
}

module.exports = dbconnect;
