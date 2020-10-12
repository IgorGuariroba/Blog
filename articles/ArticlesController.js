const express  = require("express");// Importando o express para controlar as rotas referente a categorias
const router   = express.Router();// Instacia do express router para fazer o controle fora da minha variavel app
const Category = require("../categories/Category");
const slugify  = require("slugify");
const Article  = require("./Aticle");



router.get("/admin/articles", (req, res) => {
    Article.findAll({
        include: [{model: Category}]
    }).then(articles => {
    res.render("admin/articles/index", {articles: articles});
    });
});


router.get("/admin/articles/new", (req, res) => {
    Category.findAll().then(categories =>{
        res.render("admin/articles/new", {categories: categories});
    });
});

router.post("/articles/save", (req, res) => {
    var title    = req.body.title;
    var body     = req.body.body;
    var category = req .body.category;

    Article.create({
        title:      title,
        slug:       slugify(title),
        body:       body,
        categoryId: category
    }).then(() =>{
        res.redirect("/admin/articles");
    });
});


module.exports = router;