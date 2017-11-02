var mongoose = require('mongoose');

var rentPaymentSchema = new mongoose.Schema({
    
        name:  { type: String },
        date: { type: Number },
        image: { type: String },
        tenant_status: { 
			type: String,
			Enum: ["Sent", "Not Sent"]
		},
		landlord_status: { 
			type: String,
			Enum: ["Received", "Not Received"]
		}
    });

module.exports = mongoose.model('Rent', rentPaymentSchema);