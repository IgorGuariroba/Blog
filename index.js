const express              = require("express"); // Importando o express
const app                  = express(); // Iniciando o express
const bodyParser           = require("body-parser");// Importando o bodyParser
const connection           = require("./database/database"); // Carregando nossa conexão com o banco de dados
const categoriesController = require("./categories/categoriesController");// Carregando as rotas de categorias
const articlesController   = require("./articles/articlesController");// Carregando as rotas de articles


/*
    VIEW ENGINE EJS
    gerador de marcação HTML com JavaScript simples. 
    É necessario criar a  pasta views 
 */
app.set('view engine','ejs');


/*
    MODULE STATICO EXPRESS
    Entrega arquivos estáticos como imagens
    ,arquivos CSS, e arquivos JavaScript
 */
app.use(express.static('public'));

/*  
    BODYPARSER
    body-parser é um módulo capaz de
    converter o body da requisição para vários formatos. Um desses formatos é json
*/
app.use(bodyParser.urlencoded({extended:false}));  
app.use(bodyParser.json());

/*
  DATABASE
  Conexão com o banco de dados utilizando  o 
  Promise - javascript
*/
connection
    .authenticate()
    .then(()=>{
        console.log("Conexão feita com sucesso!");
    })
    .catch((error) => {
        console.log(error);
    })


/**
 *  CATEGORIAS ROTAS
 *  Carregamos as rotas de categorias e estamos passando 
 *  Através da variavel categoriesController
 */
app.use("/",categoriesController);

/**
 *  ARTICLES ROTAS
 *  Carregamos as rotas de articles e estamos passando 
 *  Através da variavel articlesController
 */
app.use("/",articlesController);





 app.get("/",(req, res) =>{
    res.render("index");
 })


 app.listen(80,() =>{
     console.log("O servidor está rodando")
 })