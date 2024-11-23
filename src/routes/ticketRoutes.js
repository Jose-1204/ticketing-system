// src/routes/ticketRoutes.js
// Importar Express y el controlador de tickets
const express = require('express');
const ticketController = require('../controllers/ticketController');

// Crear un enrutador para las rutas de tickets
const router = express.Router();

// Rutas CRUD
router.post('/', ticketController.createTicket); // Crear un ticket
router.get('/', ticketController.getAllTickets); // Obtener todos los tickets
router.get('/:id', ticketController.getTicketById); // Obtener un ticket por ID
router.put('/:id', ticketController.updateTicket); // Actualizar un ticket
router.delete('/:id', ticketController.deleteTicket); // Eliminar un ticket

// Exportar el enrutador
module.exports = router;
