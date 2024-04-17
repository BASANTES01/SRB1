//ACCESO A EL ARCHIVO .ENV
require("dotenv").config();

//LLAMADO AL APLICATIVO DEL SERVIDOR
const app = require("./src/app")

//LEVANTANDO EL SERVIDOR
app.listen(app.get("port") , ()=>{
    console.log("Servidor iniciado en el Puerto: ", app.get("port"));
})

//routes
app.use(require('./src/routes/users'));
// app.use(require('./routes/notes'));
// app.use(require('./routes/users'));