var mongoose = require("mongoose");

const PersonalInformationSchema = new mongoose.Schema({
    fullname: String,
    gender: String,
    dob: Date,
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }
});

const PersonalInformation = mongoose.model("PersonalInformation", PersonalInformationSchema);
module.exports = PersonalInformation;