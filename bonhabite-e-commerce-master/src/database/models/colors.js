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
    
    let Color = sequelize.define(alias, cols);

    Color.associate = function (models) {
        Color.belongsToMany(models.products, {
            as: "Product",
            through: "colorProduct",
            foreignKey: "colorId",
            otherKey: "productId"
        })
    }



    return Color;
}