const path = require('path');
const {
    response
} = require('express');
const multer = require('multer')
const db = require('../database/models');
const sequelize = db.sequelize;
const Product = db.Product;
const Op = db.Sequelize.Op;

const {
    check,
    validationResult,
    body
} = require('express-validator');


module.exports = {

    index: (req, res) => {
        Product
            .findAll()
            .then(productos => {
                res.render(path.resolve(__dirname, "../views/admin/indexAdmin"), {
                    productos
                });
            })
            .catch(error => res.send(error))
    },

    create: (req, res) => {
        res.render(path.resolve(__dirname, "../views/admin/productAdd"));
    },

    save: (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            //return res.send(req.body)
            return res.render(path.resolve(__dirname, '../views/admin/productAdd'), {
                errors: errors.mapped(),
                old: req.body
            });

        } else {
            const _body = req.body;
            // return res.send(_body);
                _body.name = req.body.name,
                _body.description = req.body.description,
                _body.price = Number(req.body.price),
                _body.stock = Number(req.body.stock),
                _body.discount = req.body.discount,
                _body.categoryId = req.body.category,
                _body.collectionId = req.body.collection,
                _body.measurements = req.body.measurements,
                _body.weigth = Number(req.body.weigth),
                _body.image = req.file ? req.file.filename : '' // if ternario       

            Product
                .create(_body)
                .then(producto => {
                    res.redirect('/administrar');
                })
                .catch(error => res.send(error));
        }
    },
    show: (req, res) => {


        Product
            .findByPk(req.params.id  , {include: ['category', 'color', 'material', 'collection']})
            .then(productoMueble => {
                res.render(path.resolve(__dirname, '..', 'views', 'admin', 'detail'), {
                    productoMueble
                });
            })
    },

    destroy: (req, res) => {
        Product
            .destroy({
                where: {
                    id: req.params.id
                },
                force: true
            })
            .then(confirm => {
                res.redirect('/administrar');
            })

    },
    edit: (req, res) => {
        
        Product
            .findByPk(req.params.id)
            .then(productoMueble => {
                res.render(path.resolve(__dirname, '..', 'views', 'admin', 'edit'), {
                    productoMueble
                });
            })

    },
    update: (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            //console.log("Erroresss!!!!!!!!!!!" + errors)
            Product
                .findByPk(req.params.id)
                .then(productoMueble => {
                    res.render(path.resolve(__dirname, '..', 'views', 'admin', 'edit'), {
                        productoMueble,
                        errors: errors.mapped()
                    });
                })

        } else {

            const _body = req.body;

            _body.name = req.body.name,
                _body.description = req.body.description,
                _body.price = Number(req.body.price),
                _body.stock = Number(req.body.stock),
                _body.discount = req.body.discount,
                _body.categoryId = req.body.category,
                _body.collectionId = req.body.collection,
                _body.measurements = req.body.measurements,
                _body.weigth = Number(req.body.weigth),
                _body.image = req.file ? req.file.filename : req.body.oldImagen // if ternario   

            Product
                .update(_body, {
                    where: {
                        id: req.params.id
                    }
                })
                .then(productos => {
                    res.redirect('/administrar')
                })
                .catch(error => res.send(error));
        }
    },

    search: (req, res) => {

        Product.findAll({
                where: {
                    name: {
                        [Op.like]: `%${req.query.buscar}%`
                    }
                }
            })
            .then(resultado => {
                res.render(path.resolve(__dirname, '..', 'views', 'admin', 'indexAdmin'), {
                    productos: resultado
                });
            })
            .catch(error => res.send(error))
    }


}