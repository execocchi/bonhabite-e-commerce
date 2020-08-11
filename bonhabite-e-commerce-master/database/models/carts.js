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
    
    let carts = sequelize.define(alias, cols);

    carts.associate = function (models) {
        carts.belongsToMany(models.products, {
            as: "Product",
            through: "cartProduct",
            foreignKey: "cartId",
            otherKey: "productId"
        })
    }

    carts.associate = function (models) {
        carts.belongsTo(models.users, {
            as: "User",
            foreignKey: "cartId"
        })
    }

    carts.associate = function (models) {
        carts.belongsTo(models.orders, {
            as: "Order",
            foreignKey: "cartId"
        })
    }

    carts.associate = function (models) {
        carts.belongsTo(models.products, {
            as: "Product",
            foreignKey: "cartId"
        })
    }



    return carts;
}