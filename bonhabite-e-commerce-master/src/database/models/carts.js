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
                type: dataTypes.INTEGER
            }
        }
    
    let Cart = sequelize.define(alias, cols);

    Cart.associate = function (models) {
        Cart.belongsToMany(models.products, {
            as: "Product",
            through: "cartProduct",
            foreignKey: "cartId",
            otherKey: "productId"
        })
    }

    Cart.associate = function (models) {
        Cart.belongsTo(models.users, {
            as: "User",
            foreignKey: "cartId"
        })
    }

    Cart.associate = function (models) {
        Cart.belongsTo(models.orders, {
            as: "Order",
            foreignKey: "cartId"
        })
    }

    Cart.associate = function (models) {
        Cart.belongsTo(models.products, {
            as: "Product",
            foreignKey: "cartId"
        })
    }



    return Cart;
}