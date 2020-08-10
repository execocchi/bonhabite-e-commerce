module.exports = function (sequelize, dataTypes) {

    let alias = "Collection";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    };

    let collections = sequelize.define(alias, cols);

    collections.associate = function (models) {
        collections.hasMany(models.products, {
            as: "Product",
            foreignKey: "collectionId"
        })
    }

    return collections;


}