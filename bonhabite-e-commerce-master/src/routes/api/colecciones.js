const express = require('express');
const router = express.Router();
const path = require('path');

const coleccionesApiController = require(path.resolve(__dirname, '../../controllers/api/coleccionesApiController'));

router.get('/api/colecciones', coleccionesApiController.list)
router.get('/api/colecciones/:id', coleccionesApiController.find)



module.exports = router;