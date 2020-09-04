const express = require('express');
const router = express.Router();
const path = require('path');

const webController = require(path.resolve(__dirname, '../controllers/webController'));

router.get('/', webController.index);
router.get('/nosotros/quienessomos', webController.nosotros);
router.get('/carrito',webController.carrito);
router.get('/nosotros/contacto',webController.contacto);
router.get('/tyc',webController.tyc);
router.get('/preguntasfrecuentes',webController.preguntasfrecuentes);
router.get('/reciclados/comofunciona', webController.comofunciona)
router.get('/reciclados/cotiza', webController.cotiza)
router.get('/buscar', webController.search)





module.exports = router;
