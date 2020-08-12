module.exports = function (sequelize, dataTypes) {

    let alias = "ColorProduct";
   
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
    
    let ColorProduct = sequelize.define(alias, cols);


    return ColorProduct;
}