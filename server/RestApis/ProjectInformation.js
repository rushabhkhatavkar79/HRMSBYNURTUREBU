var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var EmployeeModel = require('../Models/Employee')
var PersonalInformationModel = require('../Models/Personalinfo');
var ProjectInformationModel = require('../Models/Projectinfo');

/**
 * Define router the get all Project Information
 */
router.get("/:id", function (req, res) {

    EmployeeModel.findById(req.params.id).populate('projectinfo').exec((err, projectinformation) => {
        if (err) {
            res.send(err);
        } else {
            res.send(projectinformation.projectlinfo);
        }
    });
});

/**
* Define router to create a Project Information
*/
router.post("/:id", function (req, res) {
    var empdbId = req.params.id;
    var projectdescription = req.body.projectdescription;
    var employee = empdbId;

    if (!projectdescription) {
        res.send({ status: "error", msg: "Missing body parameter : projectdescription" });
        return;
    }
    var projectinformation = new ProjectInformationModel({
        projectdescription: projectdescription,
        employee: employee
    });
    projectinformation.save(function (err, projectinformation) {
        if (err) {
            res.send(err);
        } else {
            //res.send(personalinformation);
            EmployeeModel.findByIdAndUpdate(empdbId, { projectinfo: projectinformation._id },
                function (err, employee) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(projectinformation);
                    }
                })
        }
    });
});

/**
* Define route to update a Project Information
*/

router.put("/:id", function (req, res) {
    var proId = req.body.piId;
    var projectdescription = req.body.projectdescription;

    if (!proId || !projectdescription) {
        res.send({
            status: "error",
            msg: "Missing body parameter : piId, project description"
        });
        return;
    }

    var toUpdate = {};
    projectdescription && (toUpdate.projectdescription = projectdescription);

    ProjectInformationModel.findByIdAndUpdate(proId, toUpdate, function (err, projectinformation) {
        if (err) {
            res.send(err);
        } else {
            res.send(projectinformation);
        }
    });
});


/**
* Delete  no id route for error handling
*/
router.delete("/", function (req, res) {
    res.send({
        status: "error",
        msg: "Missing url parameter : task id. e.g. /employee/:id"
    });
});

/**
 * Define route to delete an Personal Information
 */
router.delete("/:id", function (req, res) {
    var empdbId = req.params.id;
    var proId = req.body.proId

    ProjectInformationModel.findByIdAndDelete(proId, function (err, projectinformation) {
        if (err) {
            res.send(err);
        } else {
            EmployeeModel.findByIdAndUpdate(empdbId, { projectinfo: null },
                function (err, employee) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(projectinformation);
                    }
                })
            //res.send(personalinformation);
        }
    });
});


module.exports = router;