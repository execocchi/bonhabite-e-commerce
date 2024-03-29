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
    }

    let PaymentMethod = sequelize.define(alias, cols);

    PaymentMethod.associate = function (models) {
        PaymentMethod.belongsTo(models.Order, {
            as: "order",
            foreignKey: "paymentId"
        })
    }

    return PaymentMethod;


}