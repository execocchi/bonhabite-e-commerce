const path = require('path');
const {
    check,
    validationResult,
    body
} = require('express-validator');

const {
    Cart,
    Product,
    CartProduct,
    User
} = require('../database/models');

module.exports = {
    addCart: (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            Product.findByPk(req.body.id), {
                    include: ['Category']
                }
                .then((productos) => {
                    // return res.send(productos) veo si anda
                    let price = productos.discount > 0 ?
                        Number(productos.price) * ((100 - productos.discount) / 100) :
                        Number(productos.price);
                    //return res.send(price)

                    return CartProduct.create({
                            salePrice: price,
                            quantity: req.body.cantidad,
                            subtotal: req.body.cantidad * price,
                            statusId: 1,
                            userId: req.session.usuario.id,
                            productId: productos.id,
                            cartId: null
                        })
                        .then(item => res.redirect('/productos'))
                        .catch(error => console.log(error))

                })
        } else {
            Product.findByPk(req.body.productId, {
                    include: ['Category']
                })
                .then(producto => {
                    return res.render(path.resolve(__dirname, '../vistaquequiero'), {
                        producto,
                        errors: errors.mapped()
                    })
                })
        }

    },
    cart: (req, res) => {
        CartProduct.findAll({
            where: {
                state:1,
                userId: req.session.usuario.id
            },
            include: {
                all:true,
                nested: true
            }
        })
        .then((items) => { 
            let total = items.reduce((total, item) => (total = total + Number(item.subTotal)), 0)
            res.render(path.resolve(__dirname, '..', 'views', 'carrito'), {cartProduct:items, total})
        })

    }, 
    deleteFromCart: (req, res) => {
        CartProduct.destroy({
            where: {
                productId: req.body.itemId,  // como se  llama en la DB, con el nombre del form
                userId: req.session.usuario.id
            }
        })
        .then(() => res.redirect('/carrito'))
        .catch(error => connsole.log(error))
    }

}