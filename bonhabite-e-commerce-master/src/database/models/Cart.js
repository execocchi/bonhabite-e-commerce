module.exports = function (sequelize, dataTypes) {

    let alias = "Cart";
   
        let cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId: {
                type: dataTypes.INTEGER
            },
            total: {
                type: dataTypes.DECIMAL
            }
        }
    
    let Cart = sequelize.define(alias, cols);

    Cart.associate = function (models) {
        Cart.belongsToMany(models.Product, {
            as: "cartProduct",
            through: "CartProduct",
            foreignKey: "cartId",
            otherKey: "productId"
        })
    }

    Cart.associate = function (models) {
        Cart.belongsTo(models.User, {
            as: "User",
            foreignKey: "cartId"
        })
    }

    Cart.associate = function (models) {
        Cart.belongsTo(models.Order, {
            as: "Order",
            foreignKey: "cartId"
        })
    }

    Cart.associate = function (models) {
        Cart.belongsTo(models.Product, {
            as: "Product",
            foreignKey: "cartId"
        })
    }



    return Cart;
}