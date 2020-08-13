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

const db = require("../database/models");
const Op = db.Sequelize.Op;
const User = db.User

module.exports = {
        index: (req, res) => {
            User
                .findAll()
                .then(usuarios => {
                    res.render(path.resolve(__dirname, "../views/users/userAdmin"), {
                        usuarios
                    });
                })
                .catch(error => res.send(error))
        },

        create: (req, res) => {
            res.render(path.resolve(__dirname, "../views/users/signUp"));
        },

        save: (req, res) => {
            const _body = req.body;
            _body.name = req.body.name,
                _body.lastName = req.body.lastName,
                _body.email = req.body.email,
                _body.password = req.body.password,
                _body.image = req.file ? req.file.filename : '' // if ternario 

            User
                .create(_body)
                .then(usuario => {
                    res.redirect('/userAdmin');
                })
        },
        show: (req, res) => {
            User
                .findByPk(req.params.id)
                .then(usuarioDetalle => {
                    res.render(path.resolve(__dirname, '..', 'views', 'users', 'detail'), {
                        usuarioDetalle
                    });
                })
        },
        destroy: (req, res) => {
            User
                .destroy({
                    where: {
                        id: req.params.id
                    },
                    force: true
                })
                .then(confirm => {
                    res.redirect('/userAdmin');
                })
        },
        edit: (req, res) => {
            User
                .findByPk(req.params.id)
                .then(usuarioDetalle => {
                    res.render(path.resolve(__dirname, '..', 'views', 'users', 'edit'), {
                        usuarioDetalle
                    });
                })
        },
        update: (req, res) => {
            const _body = req.body;
            _body.name = req.body.name,
                _body.lastName = req.body.lastName,
                _body.email = req.body.email,
                _body.password = req.body.password,
                _body.image = req.file ? req.file.filename : '' // if ternario

            User
                .update(_body, {
                    where: {
                        id: req.params.id
                    }
                })
                .then(usuario => {
                    res.redirect('/userAdmin')
                })
                .catch(error => res.send(error));

            req.body.id = req.params.id;
            req.body.image = req.file ? req.file.filename : req.body.oldImage;
            // Si llega un archivo => lo guardas req.file.file.
            // Sino, se guarda req.body.oldImage. 
        },

        login: function (req, res) {
            res.render(path.resolve(__dirname, '../views/users/logIn'));
        },

        logged: (req,res,next) =>{
            const errors = validationResult(req);
            let usuarioLogueado;
            if(errors.isEmpty()){
        
                User.findOne({
                where: {
                   email: req.body.email
                }
              })
              .then((usuarioLogueado)=> {
        
                delete usuarioLogueado.password;   
                req.session.usuario = usuarioLogueado;  
              
                  if(req.body.recordarme){
                    res.cookie('email',usuarioLogueado.email,{maxAge: 1000 * 60 * 60 * 24})
                  }
                  return res.redirect('/misdatos');  
              })

            } else {
              res.render(path.resolve(__dirname, '../views/users/login'),{errors:errors.mapped(),old:req.body});        
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