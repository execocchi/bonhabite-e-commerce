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
    
    let Image = sequelize.define(alias, cols);

    Image.associate = function (models) {
        Image.belongsToMany(models.products, {
            as: "Product",
            through: "imageProduct",
            foreignKey: "imageId",
            otherKey: "productId"
        })
    }


    return Image;
}