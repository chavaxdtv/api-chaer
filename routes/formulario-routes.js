const express = require('express');
const router = express.Router();
const CarroController = require('../contollers/Formulario-controller'); // Asegúrate de que la ruta sea correcta

// Obtener todos los carros
router.get('/', CarroController.get);

// Crear un nuevo carro
router.post('/', CarroController.create);

// Eliminar un carro por ID
router.delete('/:id', CarroController.delete);

// Actualizar un carro por nombre del dueño
router.put('/', CarroController.updatebyname);

module.exports = router;