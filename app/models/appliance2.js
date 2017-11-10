'use strict';
module.exports = (sequelize, DataTypes) => {
  var Appliance = sequelize.define('Appliance', {
    id: DataTypes.NUMBER,
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    repair_desc: DataTypes.STRING,
    property_id: DataTypes.NUMBER

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Appliance;
};