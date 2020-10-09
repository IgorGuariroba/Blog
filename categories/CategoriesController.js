const express = require("express");// Importando o express para controlar as rotas referente a categorias
const router  = express.Router();// Instacia do express router para fazer o controle fora da minha variavel app




router.get("/categories", (req, res) => {
    res.send("ROTA DE  CATEGORIAS")
});

router.get("/admin/categories/new", (req, res) => {
    res.send("ROTA PARA CRIAR NOVAS CATEGORIAS")
});



module.exports = router;