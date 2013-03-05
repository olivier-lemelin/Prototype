
//############### DB #################

config = require('./config.js');
Sequelize = require('sequelize');
sequelize = new Sequelize(config.database, config.username, config.password, {
	logging: console.log,
	dialect: 'sqlite',
	storage: './DB.sqlite'
})

var Note = sequelize.import(__dirname + "/models/Note.js")
console.log(Note);


//####################################


