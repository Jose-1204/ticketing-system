// src/app.js
// importar las dependencias
const express = require("express");
const bodyParser = require("body-parser");

// importar rutas de tickets
const ticketRoutes = require("./routes/ticketRoutes");

// instancia de la aplicacion Express
const app = express();

// middlewares
app.use(bodyParser.json()); //solicitudes con cuerpo en formato JSON
app.use(bodyParser.urlencoded({ extended: true })); // solicitudes con cuerpo en formato URL-encoded

// ruta de tickets
app.use("/api/tickets", ticketRoutes); // Usar rutas bajo el prefijo /api/tickets

// ruta inicial de prueba
app.get("/", (req, res) => {
  res.send("Bienvenido al Ticketing System API");
});

// exporta la aplicacion para usarse en server.js
module.exports = app;
