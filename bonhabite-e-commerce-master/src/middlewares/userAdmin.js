const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { validationResult } = require('express-validator');
const sequelize = db.sequelize;
const User = db.User;
const Op = db.Sequelize.Op;

module.exports = (req, res, next) => {
validationResult
    res.locals.userAdmin = false;

    User.findOne({
            where: {
                email: {
                    [Op.contains]: `%bonhabite%`
                }
            }
        })
        .then(userAdmin => {
            delete userAdmin.password;
            req.session.userAdmin = userAdmin;
            res.locals.userAdmin = userAdmin;
            return next();
        })

        next();
}