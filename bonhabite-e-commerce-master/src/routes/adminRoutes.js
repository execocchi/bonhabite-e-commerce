const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const adminController = require(path.resolve(__dirname, '..', 'controllers', 'adminController'));
const validacionesMiddleware= require("../middlewares/validacionesMiddleware");

const {
    check,
    validationResult,
    body
} = require('express-validator');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/img/productos')); //Aquí deben indicar donde van a guardar la imagen
    },
    filename: function (req, file, cb) {
        cb(null, 'producto' + '-' + Date.now() + path.extname(file.originalname)); //UNIQID() --- PHP
    }
})

const upload = multer({
    storage
})

router.get('/administrar', adminController.index);

router.get('/create', adminController.create);
router.post('/create', upload.single('image'), validacionesMiddleware.addProduct, adminController.save);   //nombre que esta en el formulario.  Si queres muchos archivos, en el form pones : upload.any() => name="image[]" multiple> 

router.get('/admin/detail/:id', adminController.show);

router.get('/admin/delete/:id', adminController.destroy);

router.get('/admin/edit/:id', adminController.edit);
router.put('/admin/edit/:id',  upload.single('image'), adminController.update);







module.exports = router;
