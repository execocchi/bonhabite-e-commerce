module.exports = function (sequelize, dataTypes) {

    let alias = "Order";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cartId: {
            type: dataTypes.INTEGER
        }, 
        paymentId: {
            type: dataTypes.INTEGER
        },
        shipmentId: {
            type: dataTypes.INTEGER
        },
        statusId: {
            type: dataTypes.INTEGER
        }
    }

    let Order = sequelize.define(alias, cols);

    Order.associate = function (models) {
        Order.hasMany(models.Cart, {
            as: "Cart",
            foreignKey: "cartId"
        })
    }

    Order.associate = function (models) {
        Order.hasMany(models.PaymentMethod, {
            as: "paymentMethod",
            foreignKey: "paymentId"
        })
    }

    Order.associate = function (models) {
        Order.hasMany(models.Shipment, {
            as: "shipment",
            foreignKey: "shipmentId"
        })
    }

    Order.associate = function (models) {
        Order.hasMany(models.Status, {
            as: "status",
            foreignKey: "statusId"
        })
    }


    return Order;
}