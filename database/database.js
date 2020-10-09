// Estamos importando para a constante Sequelize
const Sequelize = require("sequelize"); //Mapeamento relacional para conexões de banco de dados


/* 
   Instanciando nosssa conecxão com o banco de dados atraves do sequelize
   A primeira informação é o nome do banco que estamos nos conectando
   Usuario que estou me conectando com o banco
   Senha desta conexão com o banco 
   Rede de conexão com o banco
   Dialeto usado para manipulação do banco de dados 
 */
const connection = new Sequelize('blog','igor','123456',{
    host:       'mysql_db_container',
    dialect:    'mysql'
});

// Primitir que a conexão possa ser usada em qualquer lugar que ela for importada!
module.exports = connection;