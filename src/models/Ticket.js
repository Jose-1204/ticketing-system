// src/models/Ticket.js

const mongoose = require('mongoose');

// Esquema del ticket
const ticketSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Título del ticket (obligatorio)
    description: { type: String, required: true }, // Descripción del ticket (obligatorio)
    status: { type: String, default: 'abierto' }, // Estado del ticket (valor por defecto: 'abierto')
    createdAt: { type: Date, default: Date.now }, // Fecha de creación (automática)
});

// Crearz el modelo a partir del esquema
module.exports = mongoose.model('Ticket', ticketSchema);
