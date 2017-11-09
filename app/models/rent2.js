'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rent = sequelize.define('Rent', {
    date: DataTypes.NUMBER,
    landlord_status: DataTypes.STRING,
    tenant_status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Rent;
};