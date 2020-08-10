module.exports = function (sequelize, dataTypes) {

    let alias = "Color";
   
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
    
    let colors = sequelize.define(alias, cols);

    products.associate = function (models) {
        products.belongsToMany(models.products, {
            as: "Product",
            through: "colorProduct",
            foreignKey: "colorId",
            otherKey: "productId"
        })
    }



    return colors;
}