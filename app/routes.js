var Property = require('./models/Property');
var User = require('./models/Users');
var Todo = require('./models/Todo');

module.exports = function(app) {

// server routes ===========================================================
	

// api calls ===========================================================
	
	//Get All	
	/*app.get('/api/properties', function(req, res) {

		Property.find(function(err, properties) {
		    if (err)
		        res.send(err)

		    res.json(properties); // return all todos in JSON format
		});

    	});*/
	app.get('/api/todos', function(req, res) {

		Todo.find(function(err, todos) {
		    if (err)
		        res.send(err)

		    res.json(todos); // return all todos in JSON format
		});

    	});
	

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
