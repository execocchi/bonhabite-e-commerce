const express = require('express');
const router = express.Router();
const path = require('path');

const carritoController = require(path.resolve(__dirname, '..', 'controllers', 'carritoController'));

router.post('carrito/agregarAlCarrito', carritoController.addCart);
router.post('/carrito/borrarDelCarrito', carritoController.deleteFromCart);

router.post('/carrito/comprar', carritoController);





module.exports = router;