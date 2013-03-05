module.exports = function(sequelize, DataTypes){
	return sequelize.define('Note', {
		id: { type: DataTypes.INTEGER, primaryKey: true},
		title: DataTypes.STRING,
	})
}
