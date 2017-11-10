var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'tenanttracker.cma6st4fitis.us-east-2.rds.amazonaws.com',
  user     : 'root',
  password : 'strongpass',
  database : 'tenantTracker'
});

connection.connect();

//Get all information (all tables joined)
//var information = connection.query('select * From tenantTracker.User LEFT JOIN tenantTracker.Property on tenantTracker.User.landlord_id=tenantTracker.Property.landlord_id LEFT JOIN tenantTracker.Rent on tenantTracker.Property.id=tenantTracker.Rent.property_id LEFT JOIN tenantTracker.Appliance on tenantTracker.Property.id=tenantTracker.Appliance.property_id;', 
//function(err, rows, fields) {
//  if (!err)
//    console.log('The solution is: ', rows);
//  else
//    console.log('Error while performing Query.');
//});

//get all information (join all 4 tables)
var SQLquery = 'select * From tenantTracker.User LEFT JOIN tenantTracker.Property on tenantTracker.User.landlord_id=tenantTracker.Property.landlord_id LEFT JOIN tenantTracker.Rent on tenantTracker.Property.id=tenantTracker.Rent.property_id LEFT JOIN tenantTracker.Appliance on tenantTracker.Property.id=tenantTracker.Appliance.property_id;';
var ret = [];
connection.query(SQLquery, function(err, rows, fields) {
    if (err)
        alert("...");
    else {
    	//convert to json
        ret = JSON.stringify(rows);
        console.log('The solution is: ', ret);
    }
    //doStuffwithTheResult(ret);
});


connection.end();