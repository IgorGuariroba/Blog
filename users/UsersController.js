const express   = require("express");// Importando o express para controlar as rotas referente a categorias
const router    = express.Router();// Instacia do express router para fazer o controle fora da minha variavel app
const User      = require("./Users");
const bcrypt    = require("bcryptjs");

router.get("/admin/users", (req, res ) => {

    res.send("Lista de usuarios");
});

router.get("/admin/users/create", (req, res) => {
    res.render("admin/users/create");
});

router.post("/users/create", (req, res) => {
    var email    = req.body.email;
    var password = req.body.password;

    /**
     * Gerando a senha 
     */
    var salt    =  bcrypt.genSaltSync(10);
    var hash    = bcrypt.hashSync(password,salt);

    User.create({
        email:    email,
        password: hash
    }).then(() => {
        res.redirect("/");
    }).catch((err) => {
        res.redirect("/");
    });
});
module.exports = router;