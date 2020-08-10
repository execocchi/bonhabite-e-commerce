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
    
    let materials = sequelize.define(alias, cols);


    products.associate = function (models) {
        products.belongsToMany(models.products, {
            as: "Product",
            through: "materialProduct",
            foreignKey: "materialId",
            otherKey: "productId"
        })
    }


    return materials;
}