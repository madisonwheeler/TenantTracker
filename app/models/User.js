/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('User', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		phone_number: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		user_type: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		landlord_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		property_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
	}, {
		tableName: 'User',
		timestamps: false
	});
};
