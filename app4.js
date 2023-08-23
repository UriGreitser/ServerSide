import express from 'express'
import bodyParser from 'body-parser';
import routerArticles from './routes/articles.js'
import routerLogin from './routes/login.js'
const app = express();
app.use(bodyParser());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/articles', routerArticles);
app.use('/login', routerLogin);
app.listen(8080)
