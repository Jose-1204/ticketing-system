
//archivo de configuracion principal
const app = require('./src/app');

// definir el puerto 
const PORT = 3000;

// iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
