const fs = require('fs');
const path = require('path');
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
    }
}