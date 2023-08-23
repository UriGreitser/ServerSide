// import express from 'express'
// import mongoose from 'mongoose'
// import routerArticles from './routes/articles.js'
// import routerLogin from './routes/login.js'
const routerArticles = require('./routes/articles.js')
const routerLogin = require('./routes/login.js')
// import cookieParser from 'cookie-parser';
// import session from 'express-session'
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

const cors = require('cors')
app.use(cors())

const customEnv = require('custom-env')
customEnv.env(process.env.NODE_ENV, './config')
console.log(process.env.CONNECTION_STRING)
// mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})


db = {
  name: "App",
  host: process.env.HOST_MONGODB || "127.0.0.1:27017",
  opts: {
  },
};

mongoose.connect(`mongodb://${db.host}/${db.name}`, db.opts);



// app.use(bodyParser());
app.use(express.static('public'));
// app.use(cookieParser());
app.set('view engine', 'ejs');
app.use('/articles', routerArticles);
app.use('/login', routerLogin);

const Items = require('./routes/item.js')
app.use('/items', Items)
console.log("Server started");
app.listen(3000)
