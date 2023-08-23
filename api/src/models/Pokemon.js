const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {

    name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },

    id : {
      type : DataTypes.UUID,
      primaryKey : true,
      defaultValue : DataTypes.UUIDV4,
    },

    image : {
      type : DataTypes.STRING,
      allowNull : false,
    },

    life : {
      type : DataTypes.INTEGER,
      allowNull : false,
    },

    attackDamage : {
      type : DataTypes.INTEGER,
      allowNull : false,
    },

    magicDamage : {
      type : DataTypes.INTEGER,
      allowNull : false
    },

    defense : {
      type : DataTypes.INTEGER,
      allowNull : false,
    },

    speed : {
      type : DataTypes.INTEGER,
      allowNull: false
    },
    
    weight : {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    database : {
      type : DataTypes.BOOLEAN,
    },
    idApi : {
      type : DataTypes.INTEGER,
    }
  }, 

  {
    timestamps :false
  });
};
