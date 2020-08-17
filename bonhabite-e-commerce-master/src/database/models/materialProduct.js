module.exports = function (sequelize, dataTypes) {

    let alias = "MaterialProduct";
   
        let cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            productId: {
                type: dataTypes.INTEGER
            },
            materialId: {
                type: dataTypes.INTEGER
            }
        }
    
    let MaterialProduct = sequelize.define(alias, cols);


    return MaterialProduct;
}