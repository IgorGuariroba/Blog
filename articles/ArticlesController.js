const express  = require("express");// Importando o express para controlar as rotas referente a categorias
const router   = express.Router();// Instacia do express router para fazer o controle fora da minha variavel app
const Category = require("../categories/Category");
const slugify  = require("slugify");
const Article  = require("./Aticle");



router.get("/admin/articles", (req, res) => {
    Article.findAll({
        order: [
            ['updatedAt','DESC']
        ],
        include: [{model: Category}] 
    }).then(articles => {
    res.render("admin/articles/index", {articles: articles});
    }).catch(err => {
        res.render("/");
    });
});


router.post("/articles/delete", (req, res) => {
    var id = req.body.id;
    if(id != undefined){

        if(!isNaN(id)){

            Article.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/articles");
            });

        }else{// NÃO FOR UM NÚMERO
            res.redirect("/admin/articles");
        }

    }else{// NULL
        res.redirect("/admin/articles")
    }
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


router.get("/admin/articles/edit/:id", (req, res) => {
    var id = req.params.id;
    if(isNaN(id)){
        res.redirect("/admin/articles");
    }
    Article.findByPk(id).then(article => {
        if(article != undefined){
            Category.findAll().then(categories => {
                res.render("admin/articles/edit",{article: article, categories: categories});
            });
            
        }else{
            res.redirect("/admin/articles");
        }

    }).catch(error => {
        res.redirect("/admin/articles");
    });
});

router.post("/articles/update", (req, res) => {
    var id         = req.body.id;
    var title      = req.body.title;
    var body       = req.body.body;
    var categoryId = req.body.category;

    Article.update({title:title, slug: slugify(title), body:body, categoryId:categoryId},{
        where:{
            id:id
        }
    }).then(() => {
        res.redirect("/admin/articles");
    }).catch(err => {
        res.redirect("/admin/articles");
    });
});


router.get("/articles/page/:num",(req, res) => {
    var page = req.params.num;

    if(isNaN(page) || page == 1){
        var offset = 0;
    }else{
        var offset = (parseInt(page) -1) * 4;
    }
    
    Article.findAndCountAll({
        limit:4,
        offset: offset,
        order:[
            ['id','DESC']
        ]
    }).then(articles => {

        var next;
        if(offset + 4 >= articles.count){
            next = false;
        }else{
            next =  true;
        }

        var result = {
            page: parseInt(page),
            next: next,
            articles:articles
        }

        Category.findAll().then(categories => {
            res.render("admin/articles/page", {result: result, categories: categories});
        });

    })
});

module.exports = router;