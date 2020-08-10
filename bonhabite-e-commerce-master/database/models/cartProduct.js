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
        subTotal: {
            type: dataTypes.INTEGER
        },
        quantity: {
            type: dataTypes.INTEGER
        },
        salePrice: {
            type: dataTypes.INTEGER
        }
    }

    let cartsProducts = sequelize.define(alias, cols);


    cartsProducts.associate = function (models) {
        cartsProducts.hasMany(models.status, {
            as: "cartsProduct",
            foreignKey: "statusId"
        })
    }

    cartsProducts.associate = function (models) {
        cartsProducts.hasMany(models.products, {
            as: "cartsProduct",
            foreignKey: "productId"
        })
    }

    carts.associate = function (models) {
        carts.belongsToMany(models.products, {
            as: "cartProduct",
            through: "cartProduct",
            foreignKey: "productId",
            otherKey: "cartId"
        })
    }


    return cartsProducts;
}