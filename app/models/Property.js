'use strict';
module.exports = (sequelize, DataTypes) => {
  var Property = sequelize.define('Property', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    rent_payments: DataTypes.ARRAY,
    users: DataTypes.ARRAY,
    appliances: DataTypes.ARRAY
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Property;
};