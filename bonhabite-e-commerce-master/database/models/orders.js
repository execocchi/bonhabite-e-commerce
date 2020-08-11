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

    let orders = sequelize.define(alias, cols);

    orders.associate = function (models) {
        orders.hasMany(models.carts, {
            as: "Cart",
            foreignKey: "cartId"
        })
    }

    orders.associate = function (models) {
        orders.hasMany(models.paymentMethods, {
            as: "Payment",
            foreignKey: "paymentId"
        })
    }

    orders.associate = function (models) {
        orders.hasMany(models.shipments, {
            as: "Shipment",
            foreignKey: "shipmentId"
        })
    }

    orders.associate = function (models) {
        orders.hasMany(models.status, {
            as: "Status",
            foreignKey: "statusId"
        })
    }


    return orders;
}