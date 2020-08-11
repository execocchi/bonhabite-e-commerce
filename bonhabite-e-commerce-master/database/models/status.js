module.exports = function (sequelize, dataTypes) {

    let alias = "Status";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let status = sequelize.define(alias, cols);

    status.associate = function (models) {
        status.belongsTo(models.cartProduct, {
            as: "Product",
            foreignKey: "statusId"
        })
    }

    status.associate = function (models) {
        status.belongsTo(models.orders, {
            as: "Order",
            foreignKey: "statusId"
        })
    }



    return status;
}