const express = require('express');
const router = express.Router();
const path = require('path');

const productosApiController = require(path.resolve(__dirname, '../../controllers/api/productosApiController'));

router.get('/api/productos', productosApiController.list)


module.exports = router;