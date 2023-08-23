const articles = [
    { id: 1, title: "Hello", content: "world" },
    { id: 2, title: "Hello2", content: "world2" },
    { id: 3, title: "Hello3", content: "world3" }
];

function getArticles () {
    return articles;
}

function getArticle(id){
    for (const i in articles) {
        const article = articles[i]
        if (article.id == id) {
            return article;            
        }
    }
    return null;
}

function createArticle(title, content){
    const article = articles[articles.length-1]
    let newArticle = {id: article.id+1, title, content};
    articles.push(newArticle);
}

module.exports = {getArticles, getArticle, createArticle}