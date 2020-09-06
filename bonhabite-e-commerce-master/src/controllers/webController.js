const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Product = db.Product;
const Op = db.Sequelize.Op;
const User = db.User


const webController = {
    index: function(req,res){
        Product
        .findAll()
        .then(productos => {
            res.render(path.resolve(__dirname, '..','views',"web",'index'), {productos : productos});
        })
        .catch(error => res.send(error))
    },
    nosotros: function (req, res) {
        res.render(path.resolve(__dirname, '../views/web/nosotros'));
    },
    contacto: function (req, res) {
        res.render(path.resolve(__dirname, '../views/web/contacto'));
    },

    carrito:function(req,res){
        Product
        .findAll()
        .then(productos => {
            res.render(path.resolve(__dirname, '..','views',"web",'carrito'), {productos : productos});
        })
        .catch(error => res.send(error))
    },

    tyc:function(req,res){
        res.render(path.resolve(__dirname, "../views/web/tyc"));
    },

    preguntasfrecuentes:function(req,res){
        res.render(path.resolve(__dirname, "../views/web/preguntasfrecuentes"));
    },
    comofunciona:function(req,res){
        res.render(path.resolve(__dirname, "../views/web/comofunciona"));
    },
    cotiza:function(req,res){
        res.render(path.resolve(__dirname, "../views/web/cotiza"));
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
                res.render(path.resolve(__dirname, '..', 'views', 'products', 'search'), {
                    productos, 
                    titulo
                });
            })

            .catch(error => res.send(error))
    },
    showApis: function (req, res) {
        res.render(path.resolve(__dirname, '../views/web/nuestrasApis'));
    },
    
}
module.exports = webController;