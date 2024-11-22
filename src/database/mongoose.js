require('dotenv').config(); // Cargar variables de entorno

const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI; // Leer la URI desde .env

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI); // Ya no necesitas opciones aquí
        console.log('Conexión a MongoDB Atlas exitosa');
    } catch (error) {
        console.error('Error al conectar a MongoDB Atlas:', error);
        process.exit(1);
    }
};


module.exports = connectDB;
