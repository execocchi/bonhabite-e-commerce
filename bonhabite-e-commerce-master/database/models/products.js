const {
    DECIMAL
} = require("sequelize/types");

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

    let products = sequelize.define(alias, cols);

    products.associate = function (models) {
        products.belongsTo(models.colecctions, {
            as: "Collection",
            foreignKey: "collectionId"
        })
    }

    products.associate = function (models) {
        products.belongsToMany(models.materialProduct, {
            as: "materialProduct",
            foreignKey: "materialId"
        })


        products.associate = function (models) {
            products.belongsToMany(models.materials, {
                as: "Product",
                through: "materialProduct",
                foreignKey: "productId",
                otherKey: "materialId"
            })
        }

        products.associate = function (models) {
            products.belongsToMany(models.colors, {
                as: "Product",
                through: "colorProduct",
                foreignKey: "productId",
                otherKey: "colorId"
            })
        }

        products.associate = function (models) {
            products.belongsToMany(models.categories, {
                as: "categoryProduct",
                through: "categoryProduct",
                foreignKey: "productId",
                otherKey: "categoryId"
            })
        }


        products.associate = function (models) {
            products.belongsToMany(models.carts, {
                as: "cartProduct",
                through: "cartProduct",
                foreignKey: "productId",
                otherKey: "cartId"
            })
        }

        cartsProducts.associate = function (models) {
            cartsProducts.belongsTo(models.cartProduct, {
                    as: "cartsProduct",
                    foreignKey: "productId"
                } )
             }


        return products;
    }

}