const { DataTypes } = require("sequelize")



module.exports = (sequelize) => {
    sequelize.define("Users" ,
    
    {
        
        id : {
            type :DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            allowNull : false,
            primaryKey : true,
        },
        
        username : {
            type : DataTypes.STRING(15),
            allowNull : false,
            unique : true
           
        },

        email : {
            type : DataTypes.STRING(50),
            allowNull : false,
            unique : true,

            validate : {
                isEmail : true,
                
            },
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false,

            validate : {

                isAlphanumeric: true,
                max : 15,
                min : 8
            }
        },

    }, 
    
    {timestamps : false})
};