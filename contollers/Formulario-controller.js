const Carro = require('../models/Formulario');

// Obtener todos los carros
exports.get = async (req, res) => {
    try {
        const carros = await Carro.find();
        res.json(carros.map(carro => carro.showData())); // Mostrar solo los datos necesarios
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
};

// Crear un nuevo carro
exports.create = async (req, res) => {
    const carro = new Carro({
        nombre_dueño: req.body.nombre_dueño,
        carro_tipo: req.body.carro_tipo,
        modelo: req.body.modelo,
        año: req.body.año,
        fallas: req.body.fallas,
        descripcion: req.body.descripcion
    });

    try {
        const nuevoCarro = await carro.save();
        res.status(201).json(nuevoCarro);
    } catch (err) {
        res.status(400).json({ mensaje: err.message });
    }
};

// Eliminar un carro por ID
exports.delete = async (req, res) => {
    try {
        const carro = await Carro.findById(req.params.id);
        if (!carro) return res.status(404).json({ mensaje: 'Carro no encontrado' });

        await carro.remove();
        res.json({ mensaje: 'Carro eliminado' });
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
};

// Editar un carro por nombre del dueño
exports.updatebyname = async (req, res) => {
    try {
        // Buscar el carro por el nombre del dueño
        const carro = await Carro.findOne({ nombre_dueño: req.body.nombre_dueño });
        if (!carro) return res.status(404).json({ mensaje: 'Carro no encontrado' });

        // Actualiza los campos necesarios
        if (req.body.carro_tipo != null) carro.carro_tipo = req.body.carro_tipo;
        if (req.body.modelo != null) carro.modelo = req.body.modelo;
        if (req.body.año != null) carro.año = req.body.año;
        if (req.body.fallas != null) carro.fallas = req.body.fallas;
        if (req.body.descripcion != null) carro.descripcion = req.body.descripcion;

        const carroActualizado = await carro.save();
        res.json(carroActualizado);
    } catch (err) {
        res.status(400).json({ mensaje: err.message });
    }
};