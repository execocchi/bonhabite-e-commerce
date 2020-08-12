module.exports = function (sequelize, dataTypes) {

    let alias = "ImageProduct";
   
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
    
    let ImageProduct = sequelize.define(alias, cols);


    return ImageProduct;
}