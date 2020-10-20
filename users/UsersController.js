const express   = require("express");// Importando o express para controlar as rotas referente a categorias
const router    = express.Router();// Instacia do express router para fazer o controle fora da minha variavel app
const User  = require("./Users");

router.get("/admin/users", (req, res ) => {

    res.send("Lista de usuarios");
});

router.get("/admin/users/create", (req, res) => {
    res.render("admin/users/create");
});


module.exports = router;