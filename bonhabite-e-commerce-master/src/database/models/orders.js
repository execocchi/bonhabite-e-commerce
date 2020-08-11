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
        Order.hasMany(models.carts, {
            as: "Cart",
            foreignKey: "cartId"
        })
    }

    Order.associate = function (models) {
        Order.hasMany(models.paymentMethods, {
            as: "Payment",
            foreignKey: "paymentId"
        })
    }

    Order.associate = function (models) {
        Order.hasMany(models.shipments, {
            as: "Shipment",
            foreignKey: "shipmentId"
        })
    }

    Order.associate = function (models) {
        Order.hasMany(models.status, {
            as: "Status",
            foreignKey: "statusId"
        })
    }


    return Order;
}