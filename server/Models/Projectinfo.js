var mongoose = require("mongoose");

const ProjectInformationSchema = new mongoose.Schema({
    projectdescription: String,
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }
});

const ProjectInformation = mongoose.model("ProjectInformation", ProjectInformationSchema);
module.exports = ProjectInformation;