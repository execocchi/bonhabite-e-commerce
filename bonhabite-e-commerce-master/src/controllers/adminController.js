const path = require('path');
const { response } = require('express');
const multer = require('multer')
const db = require('../database/models');
const sequelize = db.sequelize;
const Product = db.Product;


module.exports = {

    index: (req, res) => {
        Product
            .findAll()
            .then(productos => {
                res.render(path.resolve(__dirname, "../views/admin/indexAdmin"), { productos });
            })
            .catch(error => res.send(error))
    },

    create: (req, res) => {
        res.render(path.resolve(__dirname, "../views/admin/productAdd"));
    },

    save: (req, res) => {
        const _body = req.body;
        // return res.send(_body);
            _body.name = req.body.name,
            _body.description = req.body.description,
            _body.price = req.body.price,
            _body.stock = req.body.stock,
            _body.discount = req.body.discount,
            _body.category = req.body.category,
            _body.collection = req.body.collection,
            _body.measurements = req.body.measurements,
            _body.weigth = req.body.weigth,
            _body.image = req.file ? req.file.filename : ''    // if ternario       

        Product
            .create(_body)
            .then(producto => {
                res.redirect('/administrar');
            }) 
            .catch(error => res.send(error));  
    },
    show: (req, res) => {
        Product
            .findByPk(req.params.id)
            .then(productoMueble => {
                res.render(path.resolve(__dirname, '..', 'views', 'admin', 'detail'), { productoMueble });
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
        .then(productoMueble =>{
            res.render(path.resolve(__dirname, '..','views','admin','edit'), {productoMueble });
        })

    },
    update: (req, res) => {
        const _body = req.body;

        _body.name = req.body.name,
        _body.description = req.body.descripcion,
        _body.price = req.body.price,
        _body.stock = req.body.stock,
        _body.discount = req.body.discount,
        _body.category = req.body.category,
        _body.collection = req.body.collection,
        _body.image = req.file ? req.file.filename : req.body.oldImagen    // if ternario       

        Product
        .update(_body ,{
            where : {
                id : req.params.id
            }
        })
        .then(producto =>{
            res.redirect('/administrar')
        })
        .catch(error => res.send(error));  
       },
    
       search: ( req, res) =>{
        Product.findAll({
            where:{
                name: {[Op.like]: `%${req.query.buscar}%`}
            }
        })
        .then(resultado => { res.render(path.resolve(__dirname, '..', 'views', 'admin', 'index'),{productos: resultado});})
        .catch(error => res.send(error))
    }


}
