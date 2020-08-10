module.exports = function (sequelize, dataTypes) {

    let alias = "Role";
   
        let cols = {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: dataTypes.STRING
            }
        }
    
    let roles = sequelize.define(alias, cols);

    users.associate = function (models) {
        users.hasMany(models.users, {
                as: "User",
                foreignKey: "userId"
            } )
         }



    return roles;
}