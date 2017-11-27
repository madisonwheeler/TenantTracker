var models = require('./models');
//var Todo = require('./models/Todo');

//var nodemailer = require('nodemailer');
//var transporter = nodemailer.createTransport(transport[, defaults]);
module.exports = function(app) {

// server routes ===========================================================


// api calls ===========================================================

	app.post('/api/login', function(req, res) {
		console.log('attempt api login call with: '+ req.body);
		if(!(req.body.username || req.body.password)) {
			res.status(404).json({message: 'Username and password are required!'});
		}
		else {
			var user = req.body.username;
			var password = req.body.password;
			var potentialUser = {where: {username: user}};

			models.User.findOne(potentialUser).then( function(user) {
				if(!user) {
					res.send({message: 'Incorrect username'});
				}
				else {
					if(user.password == password) {
						res.send({user: user, message: "success"});
					}
					else {
						res.send({message: 'Incorrect password.'});
					}
				}
			});
		}
	});


	//get all appliance for that property
    app.get('/api/appliance', function(req, res) {
		models.Appliance.findAll({
			where: {property_id: parseInt(req.query.property_id)}
		}).then(function(appliances) {
			//console.log(appliances);
			if(appliances == null) {
				res.send("Not found");
			}
			else {
				res.send(appliances);
			}
		});

    });

	//update Appliance status to "Needs Repair"
    app.get('/api/appliance/update', function(req, res) {
		console.log("here1");
		console.log(req.query.repairDesc);
		models.Appliance.findOne({
			where: {id: parseInt(req.query.appliance_id)}
		}).then(function(appliance) {
			appliance.repair_desc = req.query.repairDesc;
			appliance.status = "Needs Repair";
			appliance.save();
			res.send("Success");
		});


    });

    //update Appliance status to "Good"
    app.get('/api/appliance/fix', function(req, res) {
		models.Appliance.findOne({
			where: {id: parseInt(req.query.appliance_id)}
		}).then(function(appliance) {
			appliance.repairDesc = "";
			appliance.status = "Good";
			appliance.save();
			res.send("Success");
		});


    });



    //landlord page routes


    //get property
    app.post('/api/landlord/property',function(req, res) {
    	models.Property.findOne({where: {landlord_id: req.body.landlord_id} }).then(function(property) {
    		if(property != null) {
    			res.send(property);
    		}
    	});
    });

    //get property
    app.post('/api/landlord/tenants',function(req, res) {
    	models.User.findAll({where: {landlord_id: req.body.landlord_id} }).then(function(tenants) {
    		if(tenants != null) {
    			res.send(tenants);
    		}
    	});
    });

    //get property
    app.post('/api/landlord/applianceCount',function(req, res) {
    	models.Appliance.findAll({where: {property_id: req.body.property_id} }).then(function(appliances) {
    		if(appliances != null) {
    			res.send(appliances.length);
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
