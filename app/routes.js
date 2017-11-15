var models = require('./models');
//var Todo = require('./models/Todo');

module.exports = function(app) {

// server routes ===========================================================
	

// api calls ===========================================================
	
	app.get('/login', function(req, res) {
		console.log(req.query);
		models.User.findOne({
			where: {
						username: req.query.user, 
						password: req.query.pass
			}
		}).then(function(user) {
			console.log(user);

			if(user == null) {
				res.send("Err");
			}
			else {
				res.send(user);
			}
		});
	});

	//update Appliance status
    app.get('/api/properties/update', function(req, res) {
		console.log("here1");
		console.log(req.query.repairDesc);
		models.Appliance.findOne({
			where: {id: parseInt(req.query.userID)}
		}).then(function(employee) {
			console.log(employee);
			if(employee == null) {
				res.send("Not found");
			}
			else {
				res.send(employee.dataValues);
			}
		});
	    
		
    });

    //update Appliance status
    app.get('/api/properties/fix', function(req, res) {
		models.Unit.update({code: req.query.app_code} , { $set: {"repairDesc": "", "appliance1_status": "Good" } }, {upsert: true}).exec(function(err,units) {
			if (err) {
	        	console.log(err);
			}
			else {
				res.send("Hello");
			}
		  
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
