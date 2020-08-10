module.exports = function (sequelize, dataTypes) {

    let alias = "Category";
   
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
    
    let categories = sequelize.define(alias, cols);

    products.associate = function (models) {
        products.belongsToMany(models.products, {
            as: "Product",
            through: "categoryProduct",
            foreignKey: "categoryId",
            otherKey: "productId"
        })
    }


    return categories;
}