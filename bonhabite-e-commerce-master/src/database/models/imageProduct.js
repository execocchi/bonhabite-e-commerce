module.exports = function (sequelize, dataTypes) {

    let alias = "imageProduct";
   
        let cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            productId: {
                type: dataTypes.INTEGER
            },
            imageId: {
                type: dataTypes.INTEGER
            }
        }
    
    let imageProduct = sequelize.define(alias, cols);


    return imageProduct;
}