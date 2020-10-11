const Sequelize    = require("sequelize");
const connection   = require("../database/database");
const Category     = require("../categories/Category"); // Importando o model de categoria para criar o relacionamento

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

/**
 *  RELACIONAMENTO
 * Uma categoria tem muitas categorias
 * 1 -> N
 */
Category.hasMany(Article);

/**
 *  RELACIONAMENTO
 * Um artigo pertence a  uma categoria
 * 1 -> 1
 */
Article.belongsTo(Category);

/**
 *  ATUALIZANDO O BANCO PARA CRIAR OS RELACIONAMENTOS
 *  Este comando deve ser comentado apos ser executado
 * 
 * Article.sync({
 *   force:true
 * });
 */


module.exports = Article;