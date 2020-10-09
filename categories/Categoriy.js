const Sequelize    = require("sequelize");
const connection   = require("../database/database");

/**
 *  TABELA CATEGORIES
 *  com duas colunas 
 *  titles e  slug
 */
const Category = connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

// /**
//  *  ATUALIZANDO O BANCO PARA CRIAR OS RELACIONAMENTOS
//  *  Esse comando deve ser comentado apos ter sido executado
//  */
// Category.sync({
//     force:true
// });

module.exports = Category;