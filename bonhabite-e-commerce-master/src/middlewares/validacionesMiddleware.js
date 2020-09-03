const {
    check,
    validationResult,
    body
} = require('express-validator');

const fs = require('fs');
const path = require('path');
//let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/users.json')));
const bcrypt = require('bcrypt');
const db = require("../database/models");
const Op = db.Sequelize.Op;
const User = db.User

/* User
.findAll()
.then(usuarios => {
    return usuarios
})
.catch(error => res.send(error)); */

async function usuariosTotales() {
    return await User.findAll()
}

let usuarios = usuariosTotales();

module.exports = {

    registro: [

        check('name').isLength({min: 1 }).withMessage('El campo nombre no puede estar vacío'),
       
        check('lastName').isLength({min: 1 }).withMessage('El campo apellido no puede estar vacío'),
       
        check('email').isEmail().withMessage('Agregar un email válido'),

        // Valido si el usuario ya está registrado

        body('email').custom(async (value) =>

            Array.from(await User.findAll())
            .filter(usuario => usuario.email == value).length > 0 ? Promise.reject("El usuario ya se encuentra registrado") : true),


        body('checkbox').custom((value, {
            req
        }) => {
            if (req.body.checkbox != undefined) {
                return true
            }
            return false;
        }).withMessage('Debes aceptar los términos y condiciones'),


        check('password').isLength({
            min: 6
        }).withMessage('Su contraseña debe tener un mínimo de 6 caractéres'),

        check('confirm_password').isLength({
            min: 6
        }).withMessage('Su contraseña debe tener un mínimo de 6 caractéres'),

        //El ( value ) viene a ser el valor que viaje en el name del del input del campo 
        //El valor { req } corresponde a lo que viene desde el formulario

        body('confirm_password').custom((value, {
            req
        }) => {
            if (req.body.password == value) {
                return true // Si yo retorno un true  no se muestra el error     
            } else {
                return false // Si retorno un false si se muestra el error
            }
        }).withMessage('Las contraseñas deben ser iguales'),

       /* body('image').custom((value, {
            req
        }) => {
            if (req.file != undefined) {
                return true
            }
            return false;
        }).withMessage('Elija su imagen de perfil') */

        body('image').custom((value, {
            req
        }) => {
            //console.log("validando!" + req.body.discount)

            if (!req.file) {
                return false
            }
            return true
        }).withMessage('Eija una foto de perfil'),


        body('image').custom(function (value, {
            req
        }) {
            let ext;
            //console.log('Foto'+req.file.filename);
            if (req.file.filename == '') {
                return false
            } else {
                ext = path.extname(req.file.filename).toLowerCase();
            }
            //console.log(ext);
            if (
                ext == ".jpg" ||
                ext == ".jpeg" ||
                ext == ".png" ||
                ext == ".gif") {
                return true;
            }
            return false;
        }).withMessage('Seleccionar archivos con extensión JPG, JPEG, PNG o GIF')
    ],

    logIn: [

        check('email').isEmail().withMessage('Ingresar un email válido'),
        check('password').isLength({
            min: 6
        }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),

        body('email').custom(async value => Array.from(await User.findAll())
            .filter(usuario => usuario.email == value).length > 0 ? false : Promise.reject("El usuario no se encuentra registrado")),

        body('password').custom(async (value, {
            req
        }) => {

            let usuarios = Array.from(await User.findAll())

            let usuario = usuarios.find(usuario => usuario.email == req.body.email)

            return bcrypt.compareSync(req.body.password, usuario.password) ? true : Promise.reject("La contraseña no es correcta")
        })


        /* User.findAll()
        .then(usuarios => {

            let usuarioExistente = usuarios.filter(function (usuario) {
                return usuario.email == value;
            })
            if (usuarioExistente) {
                return true
            } else {
                return false
            }

        }).withMessage('El usuario no existe'),

        // }),

        body('password').custom((value, {
            req
        }) => {

            /*   User.findAll()
               .then(usuarios => { 

            let claveCorrecta = usuarios.filter(function (usuario) {
                return bcrypt.compareSync(value, usuario.password)
            })

            if (usuarios.email == req.body.email) {
                if (claveCorrecta) {
                    return true
                } else {
                    return false
                }
            }
        }).withMessage('La contraseña es incorrecta') */
        // })
    ],

    updateUser: [

        check('name').isLength({min: 1}).withMessage('El campo nombre no puede estar vacío'),

        check('lastName').isLength({min: 1}).withMessage('El campo apellido no puede estar vacío'),

        check('email').isEmail().withMessage('Agregar un email válido'),

    
            body('confirm_password').custom((value, {
                req
            }) => {
                if (req.body.password == value) {
                    return true // Si yo retorno un true  no se muestra el error     
                } else {
                    return false // Si retorno un false si se muestra el error
                }
            }).withMessage('Las contraseñas deben ser iguales'),

         
    ],

    addProduct: [

        check('name').isLength({min: 1}).withMessage('El campo nombre no puede estar vacío'),

        check('price').isNumeric({min: 0}).withMessage('Este campo debe ser numérico'),

        check('stock').isNumeric({min: 0}).withMessage('Este campo debe ser numérico'),

        check('description').isLength({min: 1}).withMessage('El campo descripción no puede estar vacío'),
        
        check('measurements').isLength({min: 1}).withMessage('El campo medidas no puede estar vacío'),
       
        check('weigth').isNumeric({min: 0}).withMessage('Este campo debe ser numérico'),

        body('collection').custom((value, {
            req
        }) => {
            if (!req.body.collection) {
                return false
            }
            return true
        }).withMessage('El campo colección no puede estar vacío'),

        body('category').custom((value, {
            req
        }) => {
            if (!req.body.category) {
                return false
            }
            return true
        }).withMessage('El campo categoría no puede estar vacío'),


        body('discount').custom((value, {
            req
        }) => {
            //console.log("validando!" + req.body.discount)

            if (!req.body.discount) {
                return false
            }
            return true
        }).withMessage('El campo descuento no puede estar vacío'),


        body('image').custom((value, {
            req
        }) => {
            //console.log("validando!" + req.body.discount)

            if (!req.file) {
                return false
            }
            return true
        }).withMessage('El campo imagen no puede estar vacío'),


           //Aquí obligo a que el usuario seleccione su avatar
    body('image').custom(function (value, { req }) {
        let ext;
        //console.log('Foto'+req.file.filename);
        if(req.file.filename == ''){
            return false
        }else{
            ext = path.extname(req.file.filename).toLowerCase();
        }
        //console.log(ext);
        if (
            ext == ".jpg" ||
            ext == ".jpeg" ||
            ext == ".png" ||
            ext == ".gif"){
                return true;
            }
            return false;
    }).withMessage('Solo archivos JPG, JPEG, PNG o GIF')

    ],

    update: [

        check('name').isLength({min: 1}).withMessage('El campo nombre no puede estar vacío'),

        check('price').isLength({min: 1}).withMessage('El campo precio no puede estar vacío'),
        check('price').isNumeric({min: 0}).withMessage('Este campo debe ser numérico'),

        check('description').isLength({min: 1}).withMessage('El campo descripción no puede estar vacío'),

        check('stock').isLength({min: 1}).withMessage('El campo stock no puede estar vacío'),
        check('stock').isNumeric({ min: 0 }).withMessage('Este campo debe ser numérico'),

        check('measurements').isLength({ min: 1 }).withMessage('El campo medidas no puede estar vacío'),

        check('weigth').isLength({min: 1}).withMessage('El campo peso no puede estar vacío'),
        check('weigth').isNumeric({ min: 0  }).withMessage('Este campo debe ser numérico'),
    ]

};