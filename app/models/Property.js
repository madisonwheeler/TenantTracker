var mongoose = require('mongoose');

var propertySchema = new mongoose.Schema({
    name: String,
    address: String,
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    rent_payments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rent'
    }], 
    appliances: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appliance'
    }]
});

module.exports = mongoose.model('Property', propertySchema);