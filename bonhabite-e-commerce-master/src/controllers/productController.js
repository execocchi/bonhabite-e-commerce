const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const { send } = require('process');
const sequelize = db.sequelize;
const Product = db.Product;
const Category = db.Category;
const Collection = db.Collection;
const Op = db.Sequelize.Op;


const productController = {
    detail: function (req, res) {

        Product
            .findByPk(req.params.id , {include: ['category', 'color', 'material']})

            .then(producto => {
                //return res.send(producto);
                res.render(path.resolve(__dirname, '..', 'views', 'products', 'detail'), {
                    producto
                });
            })

    },

    allCategories: function (req, res) {

       /* if (req.query){
           return res.send(req.query)

        } */

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
    },


   ofertas: function (req, res) {

        /* if (req.query){
            return res.send(req.query)
 
         } */
 
         titulo = "Ofertas";
         Product
             .findAll()
             .then(productos => {
                 res.render(path.resolve(__dirname, '..', 'views', 'products', 'ofertas'), {
                     productos, titulo
                 });
             })
 
    },

    search: (req, res) => {

        let titulo = req.query.buscar

        //console.log(titulo)

        Product.findAll({

                where: {
                    name: {
                        [Op.like]: `%${req.query.buscar}%`
                    }
                }
            })
            .then(productos => {
                res.render(path.resolve(__dirname, '..', 'views', 'admin', 'index'), {
                    productos, 
                    titulo
                });
            })

            .catch(error => res.send(error))
    }
    
}

module.exports = productController;