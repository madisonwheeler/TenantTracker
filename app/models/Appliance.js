/* jshint indent: 1 */

// Appliance database table
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Appliance', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		status: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		repair_desc: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		property_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'Appliance',
		timestamps: false
	});
};
