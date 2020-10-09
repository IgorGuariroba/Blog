const express = require("express"); // Importando o express
const app = express(); // Iniciando o express
const bodyParser = require("body-parser");//importando o bodyParser
const connection = require('./database/database'); // carregando nossa conexão com o banco de dados
// const Pergunta = require("./database/Pergunta");
// const Resposta = require("./database/Resposta");


app.set('view engine','ejs');//gerador de marcação HTML com JavaScript simples. é necessario criar a  pasta views 
app.use(express.static('public'));//Entrega arquivos estáticos como imagens, arquivos CSS, e arquivos JavaScript

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





 app.get("/",(req, res) =>{
    res.render("index");
 })


 app.listen(80,() =>{
     console.log("O servidor está rodando")
 })