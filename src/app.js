// src/app.js

const express = require("express"); //Framework
const ticketRoutes = require("./routes/ticketRoutes"); // importar rutas de tickets

const app = express(); // Crea la aplicacion Express

// middlewares
app.use(express.json()); //solicitudes con cuerpo en formato JSON
app.use(express.urlencoded({ extended: true })); // solicitudes con cuerpo en formato URL-encoded

// ruta de tickets
app.use("/api/tickets", ticketRoutes); // Usar rutas bajo el prefijo /api/tickets

// ruta inicial de prueba
app.get("/", (req, res) => {
  res.send("Bienvenido al Ticketing System API");
});

module.exports = app; // exportar app
