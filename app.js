import express from 'express'
const app = express()

app.get('/login', (req, res) => {
    if (req.query.username === 'shaked' && req.query.password === '123') {
        res.end('Welcome')
    }
    else
        res.end('Wrong username and password');
})
app.listen(8080)
