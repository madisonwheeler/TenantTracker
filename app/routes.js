
//require MODELS and export the APIs
var models = require('./models');

module.exports = function(app) {
// APIs

	// SIGN UP APIs =================================================================
		//LANDLORD
			// adds landlord data to the database
			app.post('api/addLandord', function(req, res) {
				var userData=req.body;
				// auto generates ids here
				var SystemData ={};
				console.log(useData);
				
			});
				
		//TENANT
		// adds tenant data to the database
			app.post('api/addTenant', function(req, res) {
				var userData=req.body;
				// auto generates ids here
				var SystemData ={};
				// needs to query for appropriate landlord and property data to insert here
				console.log(useData);
			});
		
		
		
		
	// LOGIN APIs =================================================================
	// compares current password with password for the user in the database
	app.post('/api/login', function(req, res) {
		// console.log('attempt api login call with: '+ req.body);
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

	// APPLIANCE APIs ============================================================
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
		// console.log("here1");
		// console.log(req.query.repairDesc);
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
			appliance.repair_desc = "";
			appliance.status = "Good";
			appliance.save();
			res.send("Success");
		});
	});

	// LANDLORD PAGE APIs ========================================================
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

	// TENANT PAGE APIs ==========================================================
	//tenant page routes
	app.post('/api/tenant/property', function(req, res) {
		// console.log('call to api/ten/prop');
		models.Property.findOne({where: {id: req.body.property_id} }).then(function(property){
			console.log('findOne Property' + property.address);
			if(property != null){
				res.send(property);
			}
		});
	});

	//get landlord info for tenant landing page
	app.post('/api/tenant/landlord', function(req, res){
		// console.log('call to api/ten/land');
		models.User.findOne({where: {id: req.body.landlord_id}}).then(function(landlord) {
			// console.log('findOne landlord ' + landlord.name);
			if(landlord != null){
				res.send(landlord);
			}
		});
	});

	// RENT PAGE APIs ============================================================
  //get rent history from database
  app.post('/api/rent', function(req, res) {
  	// console.log("Here");
  	// console.log(req.body.property_id);
  	models.Rent.findAll({where: { property_id: req.body.property_id }}).then(function(rents) {
  		// console.log(rents);
  		if(rents != null) {
  			res.send(rents);
  		}
  	});
  });

  //update Tenant Rent Status
  app.post('/api/rent/send', function(req, res) {
  	// console.log("Here");
  	// console.log(req.body.property_id);
  	models.Rent.findOne({where: { id: req.body.rent_id }}).then(function(rent) {
  		if(rent != null) {
  			rent.tenant_status = "Sent";
  			rent.save();
  			res.send(rent);
  		}
  	});
  });

  //update Landlord Rent Status
  app.post('/api/rent/receive', function(req, res) {
  	// console.log("Here");
  	// console.log(req.body.property_id);
  	models.Rent.findOne({where: { id: req.body.rent_id }}).then(function(rent) {
  		if(rent != null) {
  			rent.landlord_status = "Received";
  			rent.save();
  			res.send(rent);
  		}
  	});
  });

	// route to handle all angular requests ======================================
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};
