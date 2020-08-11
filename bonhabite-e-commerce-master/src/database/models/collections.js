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

    let Collection = sequelize.define(alias, cols);

    Collection.associate = function (models) {
        Collection.hasMany(models.products, {
            as: "Product",
            foreignKey: "collectionId"
        })
    }

    return Collection;


}