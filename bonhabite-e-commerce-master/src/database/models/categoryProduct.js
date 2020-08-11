module.exports = function (sequelize, dataTypes) {

    let alias = "categoryProduct";
   
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
    
    let categoryProduct = sequelize.define(alias, cols);


    return categoryProduct;
}