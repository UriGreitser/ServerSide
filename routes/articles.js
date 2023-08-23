// import express from 'express'
// import { getArticles, getArticle } from '../controllers/articles.js'
// import { isLoggedIn } from '../controllers/login.js';

const express = require('express');
const { getArticles, getArticle } = require('../controllers/articles.js');
const { isLoggedIn } = require('../controllers/login.js');


const router = express.Router();

router.get('/', isLoggedIn, getArticles);
router.get('/:id', isLoggedIn, getArticle);

module.exports= router
/*app.get('/login', function(req,res) {
    res.end(`<!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <form method="post" action="http://localhost:8080/login">
          <input name="username">
          <input type="password" name="password">
          <input type="submit" value="Submit">
        </form>
      </body>
    </html>
    `);
})

app.post('/login', (req, res) => {
    if (req.body.username === 'shaked' && req.body.password === '123') {
        res.end('Welcome')
    }
    else
        res.end('Wrong username and password');
}) */