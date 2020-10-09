const express = require("express");// Importando o express para controlar as rotas referente a categorias
const router  = express.Router();// Instacia do express router para fazer o controle fora da minha variavel app




router.get("/articles", (req, res) => {
    res.send("ROTA DE  ARTIGOS")
});

router.get("/admin/articles/new", (req, res) => {
    res.send("ROTA PARA CRIAR NOVAS ATIGOS")
});



module.exports = router;