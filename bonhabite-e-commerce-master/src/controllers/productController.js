const path = require('path');
const fs = require('fs');


const productController = {
    detalleDeProducto: function (req, res) {
        res.render(path.resolve(__dirname, "../views/products/productDetail")); 
    },
    fomularioCargaProducto: function (req, res) {
        res.render(path.resolve(__dirname, "../views/admin/productAdd"));
    },
    showall: function (req, res) {
        let productos  = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/products.json')));
        res.render(path.resolve(__dirname, "../views/products/allProducts"), {productos : productos});
    },
    
    collections:function(req,res){
        let productos  = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/products.json')));
        res.render(path.resolve(__dirname, "../views/products/collections"), {productos : productos});
    }

}



module.exports = productController;