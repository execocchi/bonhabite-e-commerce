const path = require('path');
const fs = require('fs');
const db = require('../../database/models');
const { send } = require('process');
const sequelize = db.sequelize;
const Product = db.Product;
const Category = db.Category;
const Collection = db.Collection;
const Op = db.Sequelize.Op;
const coleccionesApiController = {
    list: function (req, res) {
        Collection
            .findAll()
            .then(coleccion => {
                for (let i = 0; i < coleccion.length; i++) {
                    coleccion[i].setDataValue("endpoint","/api/colecciones/"+ coleccion[i].id)                    
                }
                //return res.send(producto);
                let respuesta = {
                    meta:{
                        status:200,
                        total: coleccion.length,
                        url: '/api/colecciones'
                    },
                    data: coleccion        
                };
                res.json(respuesta)
                });
            },
            find: function (req, res) {

                Collection
                    .findByPk(req.params.id )
        
                    .then(coleccion => {
                        res.send(coleccion)   
                    })
        
            }
    
}
   
module.exports = coleccionesApiController;