const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const sequelize = db.sequelize;
const Product = db.Product;
const Category = db.Category;
const Collection = db.Collection;


const productController = {
    show: function (req, res) {
        Product
        .findByPk(req.params.id)
        .then(producto => {
        res.render(path.resolve(__dirname, '..', 'views', 'products', 'detail'), { producto });
        })

    },
    showall: function (req, res) {
        Product
        .findAll()
        .then(productos => {
        res.render(path.resolve(__dirname, '..', 'views', 'products', 'allProducts'), { productos });
        })
        

    },
    
    collection:function(req,res){
        Collection
        .findAll()
        .then(productos => {
            res.render(path.resolve(__dirname, "../views/products/collections"), {productos});
        })
        .catch(error => res.send(error))
     
    }
     
}



module.exports = productController;