'use strict';
module.exports = (sequelize, DataTypes) => {
  var Appliances = sequelize.define('Appliances', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Appliances;
};