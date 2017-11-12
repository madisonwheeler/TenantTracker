var Property = require('./models/Property');
var User = require('./models/Users');
var Rent = require('./models/Rent');
var Appliance = require('./models/Appliance');
var Unit = require('./models/Unit');
//var Todo = require('./models/Todo');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'tenanttracker.cma6st4fitis.us-east-2.rds.amazonaws.com',
  user     : 'root',
  password : 'strongpass',
  database : 'tenantTracker'
});

module.exports = function(app) {

// server routes ===========================================================
	

// api calls ===========================================================
	
	//Get All using MySQL
	app.get('/api/propertiesMYSQL', function(req, res) {
		connection.connect();
		var SQLquery = 'select * From tenantTracker.User LEFT JOIN tenantTracker.Property on tenantTracker.User.landlord_id=tenantTracker.Property.landlord_id LEFT JOIN tenantTracker.Rent on tenantTracker.Property.id=tenantTracker.Rent.property_id LEFT JOIN tenantTracker.Appliance on tenantTracker.Property.id=tenantTracker.Appliance.property_id;';
		var ret = [];
		connection.query(SQLquery, function(err, rows, fields) {
		    if (err)
		        res.send(err);
		    else {
		    	//convert to json
		        ret = JSON.stringify(rows);
		        //console.log('The solution is: ', ret);
		        res.json(ret);
		    }
		    //doStuffwithTheResult(ret);
		});
		connection.end();
    	});
	
	//Get All	
	app.get('/api/properties', function(req, res) {
		console.log("here");
		Unit.findOne({}).exec(function(err, units) {
			if (err) {
	        	res.send(err);
			}
		    res.json(units); // return all todos in JSON format
		});

    });

	//update Appliance status
    app.get('/api/properties/update', function(req, res) {
		console.log("here1");
		console.log(req.query.repairDesc);
		Unit.update({code: req.query.app_code} , { $set: {"repairDesc": req.query.repairDesc, "appliance1_status": "Needs Repairs" } }, {upsert: true}).exec(function(err,units) {
			if (err) {
	        	console.log(err);
			}
			else {
				res.send("Hello");
			}
		  
		});
	    
		
    });

    //update Appliance status
    app.get('/api/properties/fix', function(req, res) {
		Unit.update({code: req.query.app_code} , { $set: {"repairDesc": "", "appliance1_status": "Good" } }, {upsert: true}).exec(function(err,units) {
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
