const {DataTypes} =  require("sequelize");

module.exports = (sequelize) => {
    sequelize.define( " Nature ",
    
    {
        id: {
            type : DataTypes.INTEGER,
            primaryKey : true,
            allowNull : false
        },

        name : {
            type : DataTypes.STRING(10),
            allowNull : false
        },
    
    },
    
    {timestamps : false})
};

