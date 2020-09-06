const express = require('express');
const router = express.Router();
const path = require('path');

const categoriasApiController = require(path.resolve(__dirname, '../../controllers/api/categoriasApiController'));

router.get('/api/categorias', categoriasApiController.list)
router.get('/api/categorias/:id', categoriasApiController.find)



module.exports = router;