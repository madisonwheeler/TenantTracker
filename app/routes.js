var models = require('./models');
//var Todo = require('./models/Todo');

module.exports = function(app) {

// server routes ===========================================================


// api calls ===========================================================

	app.post('/api/login', function(req, res) {
		console.log('attempt api login call with: '+ req.body);
		if(!(req.body.username || req.body.password)) {
			res.status(404).json({message: 'Username and password are required!'});
		}
		else {
			var username = req.body.username;
			var password = req.body.password;
			var potentialUser = {where: {username: username}};

			models.User.findOne(potentialUser).then( function(user) {
				if(!user) {
					res.status(404).json({message: 'Authentication failed.'});
				}
				else {
					if(user.password === password) {
						res.status(200).json({message: 'Successfully authenticated.'});
					}
					else {
						res.status(403).json({message: 'Incorrect password.'});
					}
				}
			});
		}
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
