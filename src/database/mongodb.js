require('dotenv').config(); // Asegúrate de que esto está al principio de tu archivo principal

const mongoose = require('mongoose');

// Asumiendo que utilizas una variable de entorno llamada MONGO_URI
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error('La URI de MongoDB no está definida en las variables de entorno');
} else {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB conectado exitosamente'))
        .catch(err => console.error('Error al conectar con MongoDB', err));
}
