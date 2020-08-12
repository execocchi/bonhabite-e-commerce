module.exports = function (sequelize, dataTypes) {

    let alias = "Address";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        street: {
            type: dataTypes.STRING
        },
        number: {
            type: dataTypes.DECIMAL,
        },
        zipCode: {
            type: dataTypes.DECIMAL
        },
        floor: {
            type: dataTypes.DECIMAL
        },
        apartment: {
            type: dataTypes.STRING
        },
        city: {
            type: dataTypes.STRING
        }
    }

    let Address = sequelize.define(alias, cols);

    Address.associate = function (models) {
        Address.belongsTo(models.Shipment, {
            as: "shipment",
            foreignKey: "addressId"
        })
    }

    Address.associate = function (models) {
        Address.belongsToMany(models.User, {
            as: "user",
            through: "AddressUser",
            foreignKey: "addressId",
            otherKey: "userId"
        })
    }


    return Address;
}