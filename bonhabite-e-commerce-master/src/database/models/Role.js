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
    
    let Role = sequelize.define(alias, cols);

    Role.associate = function (models) {
        Role.hasMany(models.User, {
                as: "user",
                foreignKey: "roleId"
            } )
         }



    return Role;
}