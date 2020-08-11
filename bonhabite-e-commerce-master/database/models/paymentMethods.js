module.exports = function (sequelize, dataTypes) {

    let alias = "PaymentMethod";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        method: {
            type: dataTypes.STRING
        }
    };

    let paymentMethods = sequelize.define(alias, cols);

    paymentMethods.associate = function (models) {
        paymentMethods.belongsTo(models.orders, {
            as: "Order",
            foreignKey: "paymentId"
        })
    }

    return paymentMethods;


}