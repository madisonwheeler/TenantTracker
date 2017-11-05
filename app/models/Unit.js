var mongoose = require('mongoose');

var unitSchema = new mongoose.Schema;
unitSchema.add({
    name: String,
    address: String,
    code: String,

    landlord_name: String,
    landlord_email: String,
    landlord_username: String,
    landlord_password: String,
    landlord_phone_number: Number,

    tenant_name: String,
    tenant_email: String,
    tenant_username: String,
    tenant_password: String,
    tenant_phone_number: Number,
    
    appliance1_name: String,
    appliance1_image: String,
    appliance1_status: String,
    
    appliance2_name: String,
    appliance2_image: String,
    appliance2_status: String,

    appliance3_name: String,
    appliance3_image: String,
    appliance3_status: String,

    appliance4_name: String,
    appliance4_image: String,
    appliance4_status: String,

    appliance5_name: String,
    appliance5_image: String,
    appliance5_status: String,

    rent_date: String,
    landlord_status: String,
    tenant_status: String
});

module.exports = mongoose.model('Unit', unitSchema);
/*
{"name":"Cherry st. unit", "address":"123 Cherry St.", "users":[{"name":"Keri", "email":"keri123@gmail.com", "username":"k23", "password":"apples", "phone_number":3108887777, "user_type":"Landlord"}], "rent_payments":[{"name":"rent", "date":"02142018", "tenant_status":"Sent","landlord_status":"Received"}], "appliances": [{"name":"toilet","brand":"sears","image":"lol","status":"Good"}]}*/