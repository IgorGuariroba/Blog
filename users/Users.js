const Sequelize    = require("sequelize");
const connection   = require("../database/database");

/**
 *  TABELA CATEGORIES
 *  com duas colunas 
 *  titles e  slug
 */
const User = connection.define('users',{
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

/**
 *  ATUALIZANDO O BANCO PARA CRIAR OS RELACIONAMENTOS
 *  Esse comando deve ser comentado apos ter sido executado
 * 
 * User.sync({
 *   force:true
 * });
 */
User.sync({
   force:false
 });


module.exports = User; 