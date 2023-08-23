const articleModel = require('../models/articles.js');
function getArticles(req, res) {
    const articles = articleModel.getArticles();
    res.render('../views/allArticles.ejs', { articles });
}
function getArticle(req, res) {
    const article = articleModel.getArticle(req.params.id);
    res.render('../views/article.ejs', { article });

}
function createArticle(req, res) {
    const articles = articleModel.createArticle(req.body.title, req.body.content);
}

module.exports = {getArticles, getArticle, createArticle}