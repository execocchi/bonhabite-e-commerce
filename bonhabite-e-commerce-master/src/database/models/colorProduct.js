module.exports = function (sequelize, dataTypes) {

    let alias = "colorProduct";
   
        let cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            productId: {
                type: dataTypes.INTEGER
            },
            colorId: {
                type: dataTypes.INTEGER
            }
        }
    
    let colorProduct = sequelize.define(alias, cols);


    return colorProduct;
}