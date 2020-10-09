const express = require("express");// Importando o express para controlar as rotas referente a categorias
const router  = express.Router();// Instacia do express router para fazer o controle fora da minha variavel app




router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new");
});

module.exports = router;