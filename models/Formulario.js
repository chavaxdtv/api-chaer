const mongoose = require('mongoose');

// Definición del esquema de Carro
const carroSchema = new mongoose.Schema({
    nombre_dueño: {
        type: String,
        required: true
    },
    carro_tipo: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    año: {
        type: String,
        required: true
    },
    fallas: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});

// Método para mostrar datos
// Método para mostrar datos
carroSchema.methods.showData = function() {
    return {
        nombre_dueño: this.nombre_dueño,  // Usar los nombres correctos del esquema
        carro_tipo: this.carro_tipo,
        modelo: this.modelo,
        año: this.año,
        fallas: this.fallas,
        descripcion: this.descripcion
    };
};

// Creación del modelo Carro
const Carro = mongoose.model('Carro', carroSchema);

module.exports = Carro;