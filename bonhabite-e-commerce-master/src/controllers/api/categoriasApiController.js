const path = require('path');
const fs = require('fs');
const db = require('../../database/models');
const { send } = require('process');
const sequelize = db.sequelize;
const Product = db.Product;
const Category = db.Category;
const Collection = db.Collection;
const Op = db.Sequelize.Op;
const categoriasApiController = {
    list: function (req, res) {
        Category
            .findAll()
            .then(categoria => {
                for (let i = 0; i < categoria.length; i++) {
                    categoria[i].setDataValue("endpoint","/api/categorias/"+ categoria[i].id)                    
                }
                //return res.send(producto);
                let respuesta = {
                    meta:{
                        status:200,
                        total: categoria.length,
                        url: '/api/categorias'
                    },
                    data: categoria        
                };
                res.json(respuesta)
                });
            },
            find: function (req, res) {

                Category
                    .findByPk(req.params.id )
        
                    .then(categoria => {
                        res.send(categoria)   
                    })
        
            }
    
}
   
module.exports = categoriasApiController;