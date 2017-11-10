var mongoose = require('mongoose');

/*var unitSchema = new mongoose.Schema;
unitSchema.add({
    name: String,
    address: String,
    code: String,

});
*/
//module.exports = mongoose.model('Unit', unitSchema);
var unitSchema = new mongoose.Schema;
unitSchema.add({
    name: String,
    address: String,
    code: String,

    landlord_id: String,

    tenant_id: String, 
    
    appliance_ids: [String],

    rent_ids: [String],
});


module.exports = mongoose.model('Unit', unitSchema);
/*
{"name":"Cherry st. unit", "address":"123 Cherry St.", "users":[{"name":"Keri", "email":"keri123@gmail.com", "username":"k23", "password":"apples", "phone_number":3108887777, "user_type":"Landlord"}], "rent_payments":[{"name":"rent", "date":"02142018", "tenant_status":"Sent","landlord_status":"Received"}], "appliances": [{"name":"toilet","brand":"sears","image":"lol","status":"Good"}]}*/
