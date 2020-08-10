
const express = require('express');
const router = express.Router();
const path = require('path');

const productController = require(path.resolve(__dirname, '../controllers/productController'));

router.get('/productos/todos', productController.showall)
router.get("/producto/:id",productController.detalleDeProducto);
router.get("/colecciones/:id",productController.collections);
router.get("/productDetail",productController.detalleDeProducto);



module.exports = router;