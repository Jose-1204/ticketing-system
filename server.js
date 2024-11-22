const app = require('./src/app');
const connectDB = require('./src/database/mongoose'); // Importar la función de conexión

const PORT = 3000;

// Conectar a la base de datos antes de iniciar el servidor
connectDB();

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
