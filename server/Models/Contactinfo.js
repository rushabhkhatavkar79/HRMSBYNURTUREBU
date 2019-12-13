var mongoose = require("mongoose");

const ContactInformationSchema = new mongoose.Schema({
    address: String,
    mobile: Number,
    workemail: String,
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }
});

const ContactInformation = mongoose.model("ContactInformation", ContactInformationSchema);
module.exports = ContactInformation;