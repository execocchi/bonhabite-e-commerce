module.exports = function (sequelize, dataTypes) {

    let alias = "Material";
   
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
    
    let Material = sequelize.define(alias, cols);


    Material.associate = function (models) {
        Material.belongsToMany(models.Product, {
            as: "productMaterial",
            through: "MaterialProduct",
            foreignKey: "materialId",
            otherKey: "productId"
        })
    }


    return Material;
}