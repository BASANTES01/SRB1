const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

app.use(session({
    secret: 'tu_secreto_aqui',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ 
        mongoUrl: 'mongodb+srv://jeremybasantes3:1234@cluster0.juchyqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        ttl: 14 * 24 * 60 * 60 // tiempo de vida de la sesión en segundos (opcional)
    })
}));

// Resto de la configuración de tu aplicación...
