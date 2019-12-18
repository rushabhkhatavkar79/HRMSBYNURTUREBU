var mongoose = require("mongoose");

const BusinessUnitSchema = new mongoose.Schema({

    bu_name:String,
    bu_type:String,
    bu_head:String,

    projectinfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ProjectInformation'
    }
    
});

const BusinessUnit = mongoose.model("BusinessUnit", BusinessUnitSchema);
module.exports = BusinessUnit;