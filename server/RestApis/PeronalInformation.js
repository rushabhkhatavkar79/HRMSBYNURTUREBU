var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var EmployeeModel = require('../Models/Employee')
var PersonalInformationModel = require('../Models/Personalinfo');

//const PersonalInformation = mongoose.model("PersonalInformation", PersonalInformationModel);

/**
 * Define router the get all Personal Information
 */
router.get("/:id", function (req, res) {
    // PersonalInformationModel.find().exec(function (err, personalinformation) {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.send(personalinformation);
    //     }
    // });

    EmployeeModel.findById(req.params.id).populate('personalinfo').exec((err, personalinformation) => {
        if (err) {
            res.send(err);
        } else {
            res.send(personalinformation.personalinfo);
        }
    });
});

/**
* Define router to create a Personal Information
*/
router.post("/:id", function (req, res) {
    var empdbId = req.params.id;
    var fullname = req.body.fullname;
    var gender = req.body.gender;
    var dob = req.body.dob;
    var employee = empdbId;

    if (!fullname || !gender || !dob) {
        res.send({ status: "error", msg: "Missing body parameter : fullname, gender, dob" });
        return;
    }
    var personalinformation = new PersonalInformationModel({
        fullname: fullname,
        gender: gender,
        dob: dob,
        employee: employee
    });
    personalinformation.save(function (err, personalinformation) {
        if (err) {
            res.send(err);
        } else {
            //res.send(personalinformation);
            EmployeeModel.findByIdAndUpdate(empdbId, { personalinfo: personalinformation._id },
                function (err, employee) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(personalinformation);
                    }
                })
        }
    });
});

/**
* Define route to update a Personal Information
*/

router.put("/:id", function (req, res) {
    var piId = req.body.piId;
    var fullname = req.body.fullname;
    var gender = req.body.gender;
    var dob = req.body.dob;

    if (!piId || !(fullname || gender || dob)) {
        console.log(piId, fullname, gender, dob)
        res.send({
            status: "error",
            msg: "Missing body parameter : piId, fullname, gender, dob"
        });
        return;
    }

    var toUpdate = {};
    fullname && (toUpdate.fullname = fullname);
    gender && (toUpdate.gender = gender);
    dob && (toUpdate.dob = dob);

    PersonalInformationModel.findByIdAndUpdate(piId, toUpdate, function (err, personalinformation) {
        if (err) {
            res.send(err);
        } else {
            res.send(personalinformation);
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
    var piId = req.body.piId

    PersonalInformationModel.findByIdAndDelete(piId, function (err, personalinformation) {
        if (err) {
            res.send(err);
        } else {
            EmployeeModel.findByIdAndUpdate(empdbId, { personalinfo: null },
                function (err, employee) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(personalinformation);
                    }
                })
            //res.send(personalinformation);
        }
    });
});


module.exports = router;