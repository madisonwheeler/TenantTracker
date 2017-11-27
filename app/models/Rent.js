/* jshint indent: 1 */
// Rent database table
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Rent', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		landlord_status: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		tenant_status: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		property_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'Rent',
		timestamps: false
	});
};
