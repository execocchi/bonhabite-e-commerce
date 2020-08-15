module.exports = function (sequelize, dataTypes) {

    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.STRING
        },
        discount: {
            type: dataTypes.STRING
        },
        recommended: {
            type: dataTypes.INTEGER,
        },
        topSales: {
            type: dataTypes.INTEGER,
        },
        collectionId: {
            type: dataTypes.INTEGER,
        },
        categoryId: {
            type: dataTypes.INTEGER,
        },
        stock: {
            type: dataTypes.INTEGER,
        },
        measurements: {
            type: dataTypes.STRING,
        },
        weigth: {
            type: dataTypes.STRING,
        }
    }

    let Product = sequelize.define(alias, cols);

    Product.associate = function (models) {
        Product.belongsTo(models.Collection, {
            as: "collection",
            foreignKey: "collectionId"
        })
    }

    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "categoryId",
        })
    }

        Product.associate = function (models) {
            Product.belongsToMany(models.Material, {
                as: "material",
                through: "MaterialProduct",
                foreignKey: "productId",
                otherKey: "materialId"
            })
        }

        Product.associate = function (models) {
            Product.belongsToMany(models.Color, {
                as: "color",
                through: "ColorProduct",
                foreignKey: "productId",
                otherKey: "colorId"
            })
        }

        Product.associate = function (models) {
            Product.belongsToMany(models.Image, {
                as: "imageProduct",
                through: "ImageProduct",
                foreignKey: "productId",
                otherKey: "imageId"
            })
        }

        Product.associate = function (models) {
            Product.belongsToMany(models.Cart, {
                as: "cartProduct",
                through: "CartProduct",
                foreignKey: "productId",
                otherKey: "cardId"
            })
        }


        return Product;

}