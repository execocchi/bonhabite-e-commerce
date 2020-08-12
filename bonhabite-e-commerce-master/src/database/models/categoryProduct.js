module.exports = function (sequelize, dataTypes) {

    let alias = "CategoryProduct";
   
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
    
    let CategoryProduct = sequelize.define(alias, cols);


    return CategoryProduct;
}