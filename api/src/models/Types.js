const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Types" , 
    
    {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },

        name : {
            type : DataTypes.STRING(10),
            allowNull : false,
            
        }
    },

    {
        timestamps : false
    })
}