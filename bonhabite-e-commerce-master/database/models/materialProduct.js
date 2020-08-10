module.exports = function (sequelize, dataTypes) {

    let alias = "materialProduct";
   
        let cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            productId: {
                type: dataTypes.INTEGER
            },
            materialsId: {
                type: dataTypes.INTEGER
            }
        }
    
    let materialsProducts = sequelize.define(alias, cols);


    return materialsProducts;
}