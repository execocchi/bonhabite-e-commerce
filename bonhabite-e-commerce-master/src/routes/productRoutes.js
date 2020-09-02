
const express = require('express');
const router = express.Router();
const path = require('path');

const productController = require(path.resolve(__dirname, '../controllers/productController'));

router.get('/todas', productController.allCategories)
router.get('/categoria/:nombre', productController.categories)
router.get('/ofertas', productController.ofertas)

router.get('/busqueda', productController.search)


router.get("/colecciones/:nombre",productController.collections);

router.get('/products/detail/:id',productController.detail);






module.exports = router;