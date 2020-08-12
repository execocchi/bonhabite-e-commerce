module.exports = function (sequelize, dataTypes) {

    let alias = "AddressUser";
   
        let cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId: {
                type: dataTypes.INTEGER
            },
            addressId: {
                type: dataTypes.INTEGER
            }
        }
    
    let AddressUser = sequelize.define(alias, cols);


    return AddressUser;
}