const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const User = db.User;

// let usuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/users.json')));

module.exports = (req, res, next) => {
    
    res.locals.usuario = false;


        if (req.session.usuario) {

            res.locals.usuario = req.session.usuario;
            return next();
    
        } else if (req.cookies.email) {

            User.findOne({
                    where: {
                        email: req.cookies.email
                    }
                })
                .then(user => {
                    req.session.usuario = user;
                    res.locals.usuario = user;
                   return next();
    
        })
    }else {
        return next();
    }
}