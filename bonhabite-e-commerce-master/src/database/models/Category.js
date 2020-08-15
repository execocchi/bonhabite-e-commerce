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
    
    let Category = sequelize.define(alias, cols);

    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as: "product",
            foreignKey: "categoryId"
        })
    }


    return Category;
}