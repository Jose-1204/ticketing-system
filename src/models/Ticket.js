// src/models/Ticket.js

const mongoose = require('mongoose');

// Esquema del ticket
const ticketSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    description: { type: String, required: true }, 
    status: { type: String, default: 'Abierto' }, 
    createdAt: { type: Date, default: Date.now }, // Fecha de creacion (automatica)
});

// Crear el modelo a partir del esquema
module.exports = mongoose.model('Ticket', ticketSchema);

