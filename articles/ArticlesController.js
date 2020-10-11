const express  = require("express");// Importando o express para controlar as rotas referente a categorias
const router   = express.Router();// Instacia do express router para fazer o controle fora da minha variavel app
const Category = require("../categories/Category");



router.get("/articles", (req, res) => {
    res.send("ROTA DE  ARTIGOS")
});


router.get("/admin/articles/new", (req, res) => {
    Category.findAll().then(categories =>{
        res.render("admin/articles/new", {categories: categories});
    });
});



module.exports = router;