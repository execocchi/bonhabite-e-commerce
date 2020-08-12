module.exports = function (sequelize, dataTypes) {

    let alias = "CartProduct";

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
            type: dataTypes.DECIMAL
        },
        quantity: {
            type: dataTypes.DECIMAL
        },
        salePrice: {
            type: dataTypes.STRING
        }
    }

    let CartProduct = sequelize.define(alias, cols);


    CartProduct.associate = function (models) {
        CartProduct.hasMany(models.Status, {
            as: "status",
            foreignKey: "statusId"
        })
    }
    return CartProduct;
}

