var mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    employeeid: String,
    password: String,
    personalinfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PersonalInformation'
    },
    contactinfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ContactInformation'
    },
    projectinfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProjectInformation'
    },
    leaveinfo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LeaveInformation'
    }],
    skillinfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SkillInformation'
    }
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
