import express from 'express'
import bodyParser from 'body-parser';
const app = express()
app.use(bodyParser());

app.get('/login', function(req,res) {
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
})
app.listen(8080)
