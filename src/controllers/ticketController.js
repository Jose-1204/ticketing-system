// src/controllers/ticketController.js

// Importar el modelo Ticket
const Ticket = require('../models/Ticket');

// Crear un ticket
exports.createTicket = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'El título y la descripción son obligatorios.' });
        }

        // Crear un nuevo ticket en la base de datos
        const newTicket = new Ticket({ title, description });
        await newTicket.save(); // Guardar en MongoDB

        res.status(201).json(newTicket);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el ticket.', error: error.message });
    }
};

// Obtener todos los tickets
exports.getAllTickets = async (req, res) => {
    try {
        // Obtener todos los tickets de la base de datos
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los tickets.', error: error.message });
    }
};

// Obtener un ticket por ID
exports.getTicketById = async (req, res) => {
    try {
        const { id } = req.params;

        // Buscar un ticket por ID
        const ticket = await Ticket.findById(id);

        if (!ticket) {
            return res.status(404).json({ message: 'Ticket no encontrado.' });
        }

        res.json(ticket);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el ticket.', error: error.message });
    }
};

// Actualizar un ticket
exports.updateTicket = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status } = req.body;

        // Buscar y actualizar el ticket por ID
        const updatedTicket = await Ticket.findByIdAndUpdate(
            id,
            { title, description, status },
            { new: true } // Devuelve el ticket actualizado
        );

        if (!updatedTicket) {
            return res.status(404).json({ message: 'Ticket no encontrado.' });
        }

        res.json(updatedTicket);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el ticket.', error: error.message });
    }
};

// Eliminar un ticket
exports.deleteTicket = async (req, res) => {
    try {
        const { id } = req.params;

        // Eliminar el ticket por ID
        const deletedTicket = await Ticket.findByIdAndDelete(id);

        if (!deletedTicket) {
            return res.status(404).json({ message: 'Ticket no encontrado.' });
        }

        res.status(204).send(); // Respuesta vacia, solo confirma eliminacion
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el ticket.', error: error.message });
    }
};
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




