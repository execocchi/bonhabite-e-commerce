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

    let users = sequelize.define(alias, cols);

    users.associate = function (models) {
        users.belongsTo(models.roles, {
            as: "Role",
            foreignKey: "userId"
        })
    }

    users.associate = function (models) {
        users.hasMany(models.carts, {
            as: "Cart",
            foreignKey: "userId"
        })
    }

    users.associate = function (models) {
        users.belongsToMany(models.adresses, {
            as: "Adress",
            through: "adressUser",
            foreignKey: "userId",
            otherKey: "adressId"
        })
    }


    return users;
}