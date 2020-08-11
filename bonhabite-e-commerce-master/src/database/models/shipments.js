module.exports = function (sequelize, dataTypes) {

    let alias = "Shipment";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        adress: {
            type: dataTypes.STRING
        }
    };

    let shipments = sequelize.define(alias, cols);

    shipments.associate = function (models) {
        shipments.belongsTo(models.orders, {
            as: "Order",
            foreignKey: "shipmentId"
        })
    }

    shipments.associate = function (models) {
        shipments.hasMany(models.adresses, {
            as: "Adress",
            foreignKey: "shipmentId"
        })
    }

    return shipments;


}