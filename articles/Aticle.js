const Sequelize    = require("sequelize");
const connection   = require("../database/database");

/**
 *  TABELA ARTICLES
 *  com duas colunas 
 *  titles, slug e body
 */
const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = Article;