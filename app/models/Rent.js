var mongoose = require('mongoose');

var rentPaymentSchema = new mongoose.Schema;
rentPaymentSchema.add({
    
        name:  { type: String },
	amount: {type: Number},
        date: { type: Number },
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
//module.exports = rentPaymentSchema;
