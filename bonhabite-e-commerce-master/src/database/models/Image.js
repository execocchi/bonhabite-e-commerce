module.exports = function (sequelize, dataTypes) {

    let alias = "Image";
   
        let cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            image: {
                type: dataTypes.STRING
            }
        }
    
    let Image = sequelize.define(alias, cols);

    Image.associate = function (models) {
        Image.belongsToMany(models.Product, {
            as: "imageProduct",
            through: "ImageProduct",
            foreignKey: "imageId",
            otherKey: "productId"
        })
    }


    return Image;
}