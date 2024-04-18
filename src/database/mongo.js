const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();

app.use(session({
    secret: 'jeremybasantes',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ 
        mongoUrl: 'mmongmongosh "mongodb+srv://cluster0.juchyqr.mongodb.net/" --apiVersion 1 --username <username>odb+srv://jeremybasantes:12345@cluster0.juchyqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0ngodb+srv://jeremybasantes3:1234@cluster0.juchyqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        
    })
}));


