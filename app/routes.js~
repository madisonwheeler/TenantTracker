var Property = require('./models/Property');
var User = require('./models/Users');
var Rent = require('./models/Rent');
var Appliance = require('./models/Appliance');
var Unit = require('./models/Unit');
//var Todo = require('./models/Todo');

module.exports = function(app) {

// server routes ===========================================================
	

// api calls ===========================================================
	
	//Get All	
	app.get('/api/properties', function(req, res) {

		Unit.find({}).exec(function(err, units) {
		if (err)
		        res.send(err)

		    res.json(units); // return all todos in JSON format
		});

    	});
	/*app.get('/api/todos', function(req, res) {

		Todo.find(function(err, todos) {
		    if (err)
		        res.send(err)

		    res.json(todos); // return all todos in JSON format
		});

    	});*/
	

	// Create
	
	// Update

    	// Delete 
    	



// authentication routes ===========================================================


// frontend routes ===========================================================


// route to handle all angular requests ===========================================================
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};
