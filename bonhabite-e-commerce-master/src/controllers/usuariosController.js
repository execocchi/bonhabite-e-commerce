const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {
    response
} = require('express');
const multer = require('multer')
const {
    check,
    validationResult,
    body
} = require('express-validator');


module.exports = {

    index: (req, res) => {
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/users.json')));
        res.render(path.resolve(__dirname, "../views/users/userAdmin"), {
            usuarios
        });
    },

    create: (req, res) => {
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/users.json')));
        res.render(path.resolve(__dirname, "../views/users/signUp"));
    },

    save: (req, res) => {
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/users.json')));

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            //----------------------------------------
            //Solución a la prblemática de el id duplicado. (De acuerdo a la Indicado por Papacho y Ronaldo).
            let usuariosTotales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/users.json')));
            let ultimoUsuario = usuariosTotales.pop();
            //-----------------------------------------
            //Solución de lo mismo - propuesto por Edu.
            //-----------------------------
            //let ultimo = platos[platos.length-1];  
            //-----------------------------
            let nuevoUsuario = {
                id: ultimoUsuario.id + 1,
                name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                //image: req.file.filename,
                //Controlar si el usuario subio o no una imagen
                image: req.file ? req.file.filename : "" // Si en image llega algo => lo guardas . Sino, no guardas nada. 

            }

            //res.send(nuevoPlato);
            usuarios.push(nuevoUsuario);
            usuariosJSON = JSON.stringify(usuarios, null, 2);
            fs.writeFileSync(path.resolve(__dirname, '../models/users.json'), usuariosJSON);
            res.redirect('/userAdmin');

        } else {
            return res.render(path.resolve(__dirname, '../views/users/signUp'), {
                errors: errors.mapped(),
                old: req.body
            });
        }

    },
    show: (req, res) => {
        //res.send(req.params.id);
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/users.json')));
        let usuarioId = req.params.id;
        const usuarioDetalle = usuarios.find(usuario => usuario.id == usuarioId);
        res.render(path.resolve(__dirname, '..', 'views', 'users', 'detail'), {
            usuarioDetalle
        });
    },
    destroy: (req, res) => {
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/users.json')));
        const usuarioId = req.params.id;
        const usuarioFinal = usuarios.filter(usuario => usuario.id != usuarioId);
        usuariosJSON = JSON.stringify(usuarioFinal, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../models/users.json'), usuariosJSON);
        res.redirect('/userAdmin');
    },
    edit: (req, res) => {
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/users.json')));
        let usuarioId = req.params.id;
        const usuarioDetalle = usuarios.find(usuario => usuario.id == usuarioId);
        res.render(path.resolve(__dirname, '..', 'views', 'users', 'edit'), {
            usuarioDetalle
        });
    },
    update: (req, res) => {
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/users.json')));
        req.body.id = req.params.id;

        req.body.image = req.file ? req.file.filename : req.body.oldImage;
        // Si llega un archivo => lo guardas req.file.file.
        // Sino, se guarda req.body.oldImage. 

        let usuariosUpdate = usuarios.map(usuario => { //id nombre descripcion precio imagen
            if (usuario.id == req.body.id) {
                return usuario = req.body;
            }
            return usuario;
        });
        usuariosJSON = JSON.stringify(usuariosUpdate, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../models/users.json'), usuariosJSON);
        res.redirect('/userAdmin');


    },

    login: function (req, res) {

        res.render(path.resolve(__dirname, '../views/users/logIn'));

    },
    logged: (req, res) => {
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/users.json')));

            let usuarioLogueado = usuarios.find(usuario => usuario.email == req.body.email)

            //Modifico lo que viene del usuario, para proteger sus datos y que no esten guardados en la sesión
           delete usuarioLogueado.password;

            req.session.usuario = usuarioLogueado;
            if (req.body.recordarme) {
                //Crear la cookie de ese usuario
                res.cookie('email', usuarioLogueado.email, {maxAge: 1000 * 60 * 60 * 24})
            }
            return res.redirect('/productos/todos'); 
  

        } else {
            res.render(path.resolve(__dirname, '../views/users/login'), {
                errors: errors.mapped(),
                old: req.body
            });
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        res.cookie('email', null, {
            maxAge: -1
        });
        res.redirect('/')
    },

    miscompras: (req, res) => {
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/users.json')));
        res.render(path.resolve(__dirname, "../views/users/miscompras"), {
            usuarios
        });
    },

    datos: (req, res) => {
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/users.json')));
        res.render(path.resolve(__dirname, "../views/users/misdatos"), {
            usuarios
        });
    },


}