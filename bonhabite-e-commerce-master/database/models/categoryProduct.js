module.exports = function (sequelize, dataTypes) {

    let alias = "categoryProducts";
   
        let cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            productId: {
                type: dataTypes.INTEGER
            },
            categoryId: {
                type: dataTypes.INTEGER
            }
        }
    
    let categoriesProducts = sequelize.define(alias, cols);


    return categoriesProducts;
}