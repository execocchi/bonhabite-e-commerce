module.exports = function (sequelize, dataTypes) {

    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        lastName: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        roleId: {
            type: dataTypes.INTEGER
        }
    }

    let User = sequelize.define(alias, cols);

    User.associate = function (models) {
        User.belongsTo(models.Role, {
            as: "role",
            foreignKey: "roleId"
        })
    }

    User.associate = function (models) {
        User.hasMany(models.Cart, {
            as: "cart",
            foreignKey: "userId"
        })
    }

    User.associate = function (models) {
        User.belongsToMany(models.Address, {
            as: "adressUser",
            through: "AddressUser",
            foreignKey: "userId",
            otherKey: "addressId"
        })
    }


    return User;
}