module.exports = function (sequelize, dataTypes) {

    let alias = "adressUser";
   
        let cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId: {
                type: dataTypes.INTEGER
            },
            adressId: {
                type: dataTypes.INTEGER
            }
        }
    
    let adressUser = sequelize.define(alias, cols);


    return adressUser;
}