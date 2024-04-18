const mongoose = require('mongoose');
const URI="mongodb+srv://jeremybasantes3:1234@cluster0.juchyqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//CONEXION A MONGODB

mongoose.connect(URI)
  .then(() => console.log('¡Mongodb - Conectado!'))
  .catch(err => console.error("Mongodb - Error al conectarse: ",err));

//EXPORTANDO MODULO MONGOOSE
module.exports = mongoose;