module.exports = function (sequelize, dataTypes) {

    let alias = "Adress";

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
            type: dataTypes.INTEGER,
            allowNull: false
        },
        zipCode: {
            type: dataTypes.INTEGER
        },
        floor: {
            type: dataTypes.INTEGER
        },
        apartment: {
            type: dataTypes.STRING
        },
        city: {
            type: dataTypes.STRING
        }
    }

    let adresses = sequelize.define(alias, cols);

    adresses.associate = function (models) {
        adresses.belongsTo(models.shipments, {
            as: "Shipment",
            foreignKey: "adressId"
        })
    }

    adresses.associate = function (models) {
        adresses.belongsToMany(models.users, {
            as: "User",
            through: "adressUser",
            foreignKey: "adressId",
            otherKey: "userId"
        })
    }


    return adresses;
}