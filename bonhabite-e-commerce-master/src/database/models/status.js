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

    let Status = sequelize.define(alias, cols);

    Status.associate = function (models) {
        Status.belongsTo(models.CartProduct, {
            as: "cartProduct",
            foreignKey: "statusId"
        })
    }

    Status.associate = function (models) {
        Status.belongsTo(models.Order, {
            as: "order",
            foreignKey: "statusId"
        })
    }



    return Status;
}