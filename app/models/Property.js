/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Property', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		address: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		landlord_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'Property',
		timestamps: false
	});
};
