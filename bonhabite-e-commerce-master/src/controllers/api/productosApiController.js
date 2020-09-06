const path = require('path');
const fs = require('fs');
const db = require('../../database/models');
const { send } = require('process');
const sequelize = db.sequelize;
const Product = db.Product;
const Category = db.Category;
const Collection = db.Collection;
const Op = db.Sequelize.Op;
const productosApiController = {
    list: function (req, res) {
        Product
            .findAll( {include: [
                {association:'category'}, {association:'color'}, {association:'material'}]
            })
            .then(producto => {
                for (let i = 0; i < producto.length; i++) {
                    producto[i].setDataValue("endpoint","/api/productos/"+ producto[i].id)                    
                }
                //return res.send(producto);
                let respuesta = {
                    meta:{
                        status:200,
                        total: producto.length,
                        url: '/api/productos'
                    },
                    data: producto        
                };
                res.json(respuesta)
                });
            },
    find: function (req, res) {

        Product
            .findByPk(req.params.id , {include: ['category', 'color', 'material']})

            .then(producto => {
                res.send(producto)   
            })

    }
}
   
module.exports = productosApiController;