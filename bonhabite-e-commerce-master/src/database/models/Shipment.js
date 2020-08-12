module.exports = function (sequelize, dataTypes) {

    let alias = "Shipment";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        addressId: {
            type: dataTypes.INTEGER
        }
    }

    let Shipment = sequelize.define(alias, cols);

    Shipment.associate = function (models) {
        Shipment.belongsTo(models.Order, {
            as: "order",
            foreignKey: "shipmentId"
        })
    }

    Shipment.associate = function (models) {
        Shipment.hasMany(models.Address, {
            as: "address",
            foreignKey: "shipmentId"
        })
    }

    return Shipment;


}