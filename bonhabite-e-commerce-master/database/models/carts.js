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
            orderNumber: {
                type: dataTypes.STRING,
                allowNull: false
            },
            cartId: {
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
        carts.belongsTo(models.user, {
            as: "User",
            foreignKey: "cartId"
        })
    }

    carts.associate = function (models) {
        carts.belongsTo(models.product, {
            as: "Product",
            foreignKey: "cartId"
        })
    }



    return carts;
}