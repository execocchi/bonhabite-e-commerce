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
            type: dataTypes.DECIMAL
        },
        image: {
            type: dataTypes.STRING
        },
        discount: {
            type: dataTypes.INTEGER
        },
        recommended: {
            type: dataTypes.INTEGER,
        },
        topSales: {
            type: dataTypes.INTEGER,
        },
        collectioId: {
            type: dataTypes.INTEGER,
        },
        stock: {
            type: dataTypes.INTEGER,
        },
        measurements: {
            type: dataTypes.STRING,
        },
        weigth: {
            type: dataTypes.INTEGER,
        }
    }

    let Product = sequelize.define(alias, cols);

    Product.associate = function (models) {
        Product.belongsTo(models.colecctions, {
            as: "Collection",
            foreignKey: "collectionId"
        })
    }

    Product.associate = function (models) {
        Product.belongsToMany(models.materialProduct, {
            as: "materialProduct",
            foreignKey: "materialId"
        })


        Product.associate = function (models) {
            Product.belongsToMany(models.materials, {
                as: "Product",
                through: "materialProduct",
                foreignKey: "productId",
                otherKey: "materialId"
            })
        }

        Product.associate = function (models) {
            Product.belongsToMany(models.colors, {
                as: "Product",
                through: "colorProduct",
                foreignKey: "productId",
                otherKey: "colorId"
            })
        }

        Product.associate = function (models) {
            Product.belongsToMany(models.categories, {
                as: "categoryProduct",
                through: "categoryProduct",
                foreignKey: "productId",
                otherKey: "categoryId"
            })
        }


        Product.associate = function (models) {
            Product.belongsToMany(models.carts, {
                as: "cartProduct",
                through: "cartProduct",
                foreignKey: "productId",
                otherKey: "cartId"
            })
        }

        Product.associate = function (models) {
            Product.belongsTo(models.cartProduct, {
                    as: "cartsProduct",
                    foreignKey: "productId"
                } )
             }


        return Product;
    }

}