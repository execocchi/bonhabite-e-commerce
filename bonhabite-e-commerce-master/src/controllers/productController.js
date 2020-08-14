const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const sequelize = db.sequelize;
const Product = db.Product;
const Category = db.Category;
const Collection = db.Collection;


const productController = {
    detail: function (req, res) {

        Product
            .findByPk(req.params.id)
            .then(producto => {
                res.render(path.resolve(__dirname, '..', 'views', 'products', 'detail'), {
                    producto
                });
            })

    },

    categories: function (req, res) {

            //return res.send(req.query.category);
            const categorias = Category.findAll();
            const productos = 
            Product
            .findAll({
                where: {categoryId : req.query.category},
                include: [{association: 'categoryProduct'}]
            })
            Promise.all([productos,categorias])
            .then(([productos,categorias]) =>
                res.render(path.resolve(__dirname, '..', 'views', 'products', 'allProducts'), {productos,categorias })
                )   
            .catch(error => res.send(error))
    },


    collection: function (req, res) {

        const collections = Collection.findAll();
        const productos = 
        Product
        .findAll({
            where: {collectionId : req.query.collection},
            include: [{association: 'collection'}]
        })
        Promise.all([productos,collections])
        .then(([productos,collections]) =>
            //return res.send(platoComida);
            res.render(path.resolve(__dirname, '..', 'views', 'products', 'collections'), {productos,collections})
            )   
        .catch(error => res.send(error))
        
      
    }

}

module.exports = productController;