module.exports = function (sequelize, dataTypes) {

    let alias = "cartProduct";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productId: {
            type: dataTypes.INTEGER
        },
        cartId: {
            type: dataTypes.INTEGER
        },
        statusId: {
            type: dataTypes.INTEGER
        },
        subtotal: {
            type: dataTypes.INTEGER
        },
        quantity: {
            type: dataTypes.INTEGER
        },
        salePrice: {
            type: dataTypes.INTEGER
        }
    }

    let cartProduct = sequelize.define(alias, cols);


    cartProduct.associate = function (models) {
        cartProduct.hasMany(models.status, {
            as: "cartsProduct",
            foreignKey: "statusId"
        })
    }

    cartProduct.associate = function (models) {
        cartProduct.hasMany(models.products, {
            as: "cartsProduct",
            foreignKey: "productId"
        })
    }

    cartProduct.associate = function (models) {
        cartProduct.belongsToMany(models.products, {
            as: "cartProduct",
            through: "cartProduct",
            foreignKey: "productId",
            otherKey: "cartId"
        })
    }


    return cartProduct;
}