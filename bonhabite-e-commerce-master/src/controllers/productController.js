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

    allCategories: function (req, res) {

        titulo = "Todas";
        Product
            .findAll()
            .then(productos => {
                res.render(path.resolve(__dirname, '..', 'views', 'products', 'allProducts'), {
                    productos, titulo
                });
            })


    },

    categories: async function (req, res) {

        //return res.send(req.params.nombre);

        let categorias = await Category.findAll({
            where: {
                name: req.params.nombre
            },
            include: [{
                association: 'product'
            }]
        })

        //return res.send(categorias[0].product)
        
        let productos = categorias[0].product;
        //return res.send(products);
        let titulo = String(req.params.nombre)

        res.render(path.resolve(__dirname, '..', 'views', 'products', 'allProducts'), {
            productos,
            titulo
        })
    },


    collections: async function (req, res) {

        //return res.send(req.params.nombre);

        let colecciones = await Collection.findAll({
            where: {
                name: req.params.nombre
            },
            include: [{
                association: 'product'
            }]
        })

        //return res.send(colecciones[0].product)
        
        let productos = colecciones[0].product;
        let banner = colecciones[0].image;
        let titulo = String(req.params.nombre)
       //return  res.send(banner)

        res.render(path.resolve(__dirname, '..', 'views', 'products', 'collections'), {
            productos,
            titulo,
            banner
        })
    }

}

module.exports = productController;