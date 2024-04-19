const mongoose = require('mongoose');


const mongoURI = process.env.MONGOURICLOUD;

if (!mongoURI) {
    console.error('No se encontró la URI de MongoDB en las variables de entorno.');
} else {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Conectado a MongoDB.'))
        .catch(err => console.error('Error al conectar con MongoDB:', err));
}
