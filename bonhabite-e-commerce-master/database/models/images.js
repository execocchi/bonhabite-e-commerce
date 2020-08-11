module.exports = function (sequelize, dataTypes) {

    let alias = "Image";
   
        let cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            fileName: {
                type: dataTypes.STRING
            }
        }
    
    let images = sequelize.define(alias, cols);

    images.associate = function (models) {
        images.belongsToMany(models.products, {
            as: "Product",
            through: "imageProduct",
            foreignKey: "imageId",
            otherKey: "productId"
        })
    }


    return images;
}