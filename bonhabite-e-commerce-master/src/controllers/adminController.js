const path = require('path');
const fs = require('fs');
const {response} = require('express');
const multer = require('multer')

module.exports = {

    index: (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/products.json')));
        res.render(path.resolve(__dirname, "../views/admin/indexAdmin"),{productos});
            },
       
        create: (req, res) => {
            let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/products.json')));
            res.render(path.resolve(__dirname, "../views/admin/productAdd"));
                },

                save: (req, res) => {
                    let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/products.json'),{encoding: 'utf-8'}));
                    //----------------------------------------
                    //Solución a la prblemática de el id duplicado. (De acuerdo a la Indicado por Papacho y Ronaldo).
                    let productosTotales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/products.json')));
                    let ultimoProducto = productosTotales.pop();
                    //-----------------------------------------
                    //Solución de lo mismo - propuesto por Edu.
                    //-----------------------------
                    //let ultimo = platos[platos.length-1];  
                    //-----------------------------
                    let nuevoProducto = {
                        id: ultimoProducto.id + 1,
                        name: req.body.name,
                        description:req.body.description,
                        price:req.body.price,
                        stock:req.body.stock,
                        discount:req.body.discount,
                        category:req.body.category,
                        collection:req.body.collection,
                        //image: req.file.filename,
                        //Controlar si el usuario subio o no una imagen
                        image: req.file ? req.file.filename : "" // Si en image llega algo => lo guardas . Sino, no guardas nada. 
                    }

                    //res.send(nuevoPlato);
                    productos.push(nuevoProducto);
                    productosJSON = JSON.stringify(productos, null, 2);
                    fs.writeFileSync(path.resolve(__dirname, '../models/products.json'), productosJSON);
                    res.redirect('/administrar');
                   
                    
                },
                show: (req, res) => {
                    //res.send(req.params.id);
                    let producto = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/products.json')));
                    let productoId = req.params.id;
                    const productoMueble = producto.find(producto => producto.id == productoId);
                    res.render(path.resolve(__dirname, '..', 'views', 'admin', 'detail'), {
                        productoMueble
                    });
                },
                destroy: (req, res) => {
                    let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/products.json')));
                    const productoId = req.params.id;
                    const productoFinal = productos.filter(producto => producto.id != productoId);
                    productoJSON = JSON.stringify(productoFinal, null, 2);
                    fs.writeFileSync(path.resolve(__dirname, '../models/products.json'), productoJSON);
                    res.redirect('/administrar');
                },
                edit: (req, res) => {
                    let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/products.json')));
                    let productoId = req.params.id;
                    const productoMueble = productos.find(producto => producto.id == productoId);
                    res.render(path.resolve(__dirname, '..', 'views', 'admin', 'edit'), {
                        productoMueble
                    });
                },
                update: (req, res) => {
                    let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/products.json')));
                    req.body.id = req.params.id;

                    req.body.image = req.file ? req.file.filename : req.body.oldImage;
                    // Si llega un archivo => lo guardas req.file.file.
                    // Sino, se guarda req.body.oldImage. 

                    let productosUpdate = productos.map(producto => { //id nombre descripcion precio imagen
                        if (producto.id == req.body.id) {
                            return producto = req.body;
                        }
                        return producto;
                    });
                    productosJSON = JSON.stringify(productosUpdate, null, 2);
                    fs.writeFileSync(path.resolve(__dirname, '../models/products.json'), productosJSON);
                    res.redirect('/administrar');


                },


        }
        