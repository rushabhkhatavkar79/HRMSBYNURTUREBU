const express = require("express");
var mongoose = require("mongoose");
var leaveinfoapi = require("./RestApis/LeaveInformation");
var personalinfoapi = require('./RestApis/PeronalInformation');
var employeeapi = require('./RestApis/Employee');
var contactapi = require('./RestApis/ContactInformation');
var projectapi = require('./RestApis/ProjectInformation');
var skillinfoapi = require('./RestApis/SkillInformation');
var businessapi = require('./RestApis/BusinessUnit');

const app = express();
app.use(express.json());
const port = 3003;

mongoose.connect("mongodb://localhost/hrms", {
  useNewUrlParser: true,useUnifiedTopology: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log(" we're connected!");
});

app.use("/employee", employeeapi);
app.use("/personalinformation", personalinfoapi);
app.use("/contactinformation", contactapi);
app.use("/leaveinformation", leaveinfoapi);
app.use("/skillinformation", skillinfoapi);
app.use("/projectinformation", projectapi);
app.use("/bu_information",businessapi);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
