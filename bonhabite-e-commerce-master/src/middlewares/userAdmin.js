const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const User = db.User;
const Op = db.Sequelize.Op;

module.exports = (req, res, next) => {

    res.locals.userAdmin = false;

    if (req.session.usuario != undefined){
        //console.log(req.session.usuario.roleId + "---------------------")
        
        if (req.session.usuario.roleId == 1){
            //console.log('--------' + req.session.usuario)
            res.locals.userAdmin = req.session.usuario;
            next();
    }
}
next();
}