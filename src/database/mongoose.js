require('dotenv').config(); // carga variables de entorno

const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI; // leer la URI de .env

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI); 
        console.log('Conexión a MongoDB Atlas exitosa');
    } catch (error) {
        console.error('Error al conectar a MongoDB Atlas:', error);
        process.exit(1);
    }
};


module.exports = connectDB;
