var mongoose = require('mongoose');

var applianceSchema = new mongoose.Schema;
applianceSchema.add({
    
        name:  { type: String },
        brand: { type: String },
        image: { type: String },
	status_note:{type:String},
        status: { 
			type: String,
			Enum: ["Needs Repair", "Good"]
		}
	
    });

module.exports = mongoose.model('Appliance', applianceSchema);
//module.exports = applianceSchema;
