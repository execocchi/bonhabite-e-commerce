
const express = require('express');
const router = express.Router();
const path = require('path');

const productController = require(path.resolve(__dirname, '../controllers/productController'));

router.get('/productos/:id', productController.categories)
router.get('/products/detail/:id',productController.detail);

router.get("/colecciones/:id",productController.collection);




module.exports = router;