const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcrypt');
const multer = require('multer');
const usuariosController = require(path.resolve(__dirname, '..', 'controllers', 'usuariosController'));
const {
    check,
    validationResult,
    body
} = require('express-validator');
const validacionesMiddleware= require("../middlewares/validacionesMiddleware");
const fs = require('fs');





let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/users.json')));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/img/usuarios')); // donde va la guardar la imagen
    },
    filename: function (req, file, cb) {
        cb(null, 'usuario' + '-' + Date.now() + path.extname(file.originalname)); //UNIQID() --- PHP
    }
})

const upload = multer({
    storage
})
router.get('/login', usuariosController.login);
router.post('/login', validacionesMiddleware.logIn , usuariosController.logged);


router.get('/userAdmin', usuariosController.index);

router.get('/signup', usuariosController.create);

router.post('/signup', upload.single('image'), validacionesMiddleware.registro, 

usuariosController.save); //nombre que esta en el formulario.  Si queres muchos archivos, en el form pones : upload.any() => name="image[]" multiple> 

router.get('/logout', usuariosController.logout);

router.get('/user/detail/:id', usuariosController.show);

router.get('/user/delete/:id', usuariosController.destroy);

router.get('/user/edit/:id', usuariosController.edit);
router.put('/user/edit/:id', upload.single('image'), validacionesMiddleware.updateUser ,usuariosController.update);

router.get('/perfil/miscompras', usuariosController.miscompras)
router.get('/perfil/misdatos', usuariosController.datos)
router.get('/perfil', usuariosController.datos)







module.exports = router;