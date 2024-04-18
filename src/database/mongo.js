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
        
    })
}));


