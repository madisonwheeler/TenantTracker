var mongoose = require('mongoose');
var user = require('./Users.js');
var rent = require('./Rent.js');
var appliance = require('./Appliance.js');

var propertySchema = new mongoose.Schema({
    name: String,
    address: String,
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: user
    }],
    rent_payments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: rent
    }], 
    appliances: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: appliance
    }]
});

module.exports = mongoose.model('Property', propertySchema);