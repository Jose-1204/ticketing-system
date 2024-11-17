// src/controllers/ticketController.js

// Simular base de datos en memoria
let tickets = [];
let currentId = 1;

// Crear un ticket
exports.createTicket = (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'El titulo y la descripcion son obligatorios.' });
    }

    const newTicket = {
        id: currentId++,
        title,
        description,
        status: 'abierto', // Estado por defecto
        createdAt: new Date()
    };

    tickets.push(newTicket);
    res.status(201).json(newTicket);
};

// Obtener todos los tickets
exports.getAllTickets = (req, res) => {
    res.json(tickets);
};

// Obtener un ticket por ID
exports.getTicketById = (req, res) => {
    const { id } = req.params;
    const ticket = tickets.find(t => t.id === parseInt(id));

    if (!ticket) {
        return res.status(404).json({ message: 'Ticket no encontrado.' });
    }

    res.json(ticket);
};

// Actualizar un ticket
exports.updateTicket = (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const ticket = tickets.find(t => t.id === parseInt(id));
    if (!ticket) {
        return res.status(404).json({ message: 'Ticket no encontrado.' });
    }

    if (title) ticket.title = title;
    if (description) ticket.description = description;
    if (status) ticket.status = status;

    res.json(ticket);
};

// Eliminar un ticket
exports.deleteTicket = (req, res) => {
    const { id } = req.params;

    const index = tickets.findIndex(t => t.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ message: 'Ticket no encontrado.' });
    }

    tickets.splice(index, 1);
    res.status(204).send(); // No devuelve contenido, solo confirma eliminacion
};
