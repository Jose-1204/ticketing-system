// src/models/Ticket.js

const mongoose = require('mongoose');

// Esquema del ticket
const ticketSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Titulo del ticket (obligatorio)
    description: { type: String, required: true }, // Descripcion del ticket (obligatorio)
    status: { type: String, default: 'abierto' }, // Estado del ticket (valor por defecto: 'abierto')
    createdAt: { type: Date, default: Date.now }, // Fecha de creación (automatica)
});

// Crea el modelo a partir del esquema
module.exports = mongoose.model('Ticket', ticketSchema);


