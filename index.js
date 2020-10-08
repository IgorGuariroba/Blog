const express = require("express"); // Importando o express
const app = express(); // Iniciando o express
 const bodyParser = require("body-parser");//importando o bodyParser
// const connection = require('./database/database'); //
// const Pergunta = require("./database/Pergunta");
// const Resposta = require("./database/Resposta");


app.set('view engine','ejs');//gerador de marcação HTML com JavaScript simples. é necessario criar a  pasta views 


app.use(express.static('pubic'));//Entrega arquivos estáticos como imagens, arquivos CSS, e arquivos JavaScript
app.use(bodyParser.urlencoded({extended:false})); //body-parser é um módulo capaz de 
app.use(bodyParser.json());//converter o body da requisição para vários formatos. Um desses formatos é json


 app.get("/",(req, res) =>{
    res.render("index");
 })


 app.listen(80,() =>{
     console.log("O servidor está rodando")
 })