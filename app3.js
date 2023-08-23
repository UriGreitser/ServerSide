import express from 'express'
import bodyParser from 'body-parser';
import router from './routes/articles.js'
const app = express();
app.use(bodyParser());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', router);
app.listen(8080)
