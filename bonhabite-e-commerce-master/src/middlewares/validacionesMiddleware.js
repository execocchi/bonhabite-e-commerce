const {
    check,
    validationResult,
    body
} = require('express-validator');

const fs = require('fs');
const path = require('path');
//let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/users.json')));
const db = require("../database/models");
const Op = db.Sequelize.Op;
const User = db.User

/* User
.findAll()
.then(usuarios => {
    return usuarios
})
.catch(error => res.send(error)); */

async function usuariosTotales (){
    return await User.findAll()    
}

let usuarios = usuariosTotales();

module.exports = {

    registro: [
        
        check('name').isLength({
            min: 1
        }).withMessage('El campo nombre no puede estar vacío'),
        check('lastName').isLength({
            min: 1
        }).withMessage('El campo apellido no puede estar vacío'),
        check('email').isEmail().withMessage('Agregar un email válido'),

        // Valido si el usuario ya está registrado

        body('email').custom((value) => {
          
            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i].email == value) {
                    return false // si se cumple, muestra el error: ya existe
                }
            } 
            return true // no existe el mail, no muestra mensaje de error 
        }).withMessage('El usuario ya se encuentra registrado'),

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


        body('image').custom((value, {
            req
        }) => {
            if (req.file != undefined) {
                return true
            }
            return false;
        }).withMessage('Elija su imagen de perfil')
    ],

    logIn: [

        check('email').isEmail().withMessage('Ingresar un email válido'),
        check('password').isLength({
            min: 6
        }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
        body('email').custom((value) => { //value: lo que tipea el usuario

        /*    User.findAll()
            .then(usuarios => {   */

            let usuarioExistente = usuarios.filter(function(usuario){
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
            .then(usuarios => { */

            let claveCorrecta = usuarios.filter(function (usuario){
                return bcrypt.compareSync(value, usuario.password)
            })

                if (usuarios.email == req.body.email) {
                    if (claveCorrecta) {
                        return true
                    } else {
                        return false
                    }
                }
        }).withMessage('La contraseña es incorrecta')
   // })
    ]
};