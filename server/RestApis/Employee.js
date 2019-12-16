var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var PersonalInformationModel = require('../Models/Personalinfo');
var ContactInformationModel = require('../Models/Contactinfo');
var EmployeeModel = require('../Models/Employee');

//const PersonalInformation = mongoose.model("PersonalInformation", PersonalInformationModel);

/**
 * Define router the get all Personal Information
 */
router.get("/", function (req, res) {
    EmployeeModel.find().exec(function (err, employees) {
        if (err) {
            res.send(err);
        } else {
            res.send(employees);
        }
    });
});

/**
 * Define router the get all Personal Information
 */
router.get("/:id", function (req, res) {
    EmployeeModel.findById(req.params.id).exec(function (err, employee) {
        if (err) {
            res.send(err);
        } else {
            res.send(employee);
        }
    });
});

/**
 * find by username --here employeeid
 */
router.post("/login", function (req, res) {

    var employeeid = req.body.employeeid;
    var password = req.body.password;

    if (!employeeid || !password) {
        res.send({ status: "error", msg: "Missing body parameter : employeeid, password" });
        return;
    }

    EmployeeModel.findOne({ employeeid: employeeid, password: password }, function (err, id) {
        if (err) {
            res.send(err)
        }
        else {
            res.send(id)

        }
    });

});

/**
* Define router to create a Personal Information
*/
router.post("/", function (req, res) {

    var employeeid = req.body.employeeid;
    var password = req.body.password;
    var personalinfo = req.body.personalinfo;
    var contactinfo = req.body.contactinfo;

    //var dob = req.body.dob;

    if (!employeeid || !password) {
        res.send({ status: "error", msg: "Missing body parameter : employeeid, password" });
        return;
    }
    var employee = new EmployeeModel({
        employeeid: employeeid,
        password: password,
        personalinfo: personalinfo,
        contactinfo: contactinfo
    });
    employee.save(function (err, employee) {
        if (err) {
            res.send(err);
        } else {
            res.send(employee);
        }
    });
});

/**
* Define route to update a Personal Information
*/

router.put("/", function (req, res) {
    var empdbId = req.body.empdbId;
    var employeeid = req.body.employeeid;
    var password = req.body.password;

    if (!empdbId || !employeeid || !password) {
        res.send({
            status: "error",
            msg: "Missing body parameter : empdbId, employeeid, password"
        });
        return;
    }

    var toUpdate = {};
    employeeid && (toUpdate.employeeid = employeeid);
    password && (toUpdate.password = password);
    //dob && (toUpdate.dob = dob);

    EmployeeModel.findByIdAndUpdate(empdbId, toUpdate, function (err, employee) {
        if (err) {
            res.send(err);
        } else {
            res.send(employee);
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

    // EmployeeModel.findByIdAndDelete(empdbId, function (err, employee) {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.send(employee);
    //     }
    // });

    EmployeeModel.findById(empdbId, function (err, employee) {
        if (err) {
            res.send(err);
        } else {
            var personalinfoId = employee.personalinfo;
            var contactinfoId = employee.contactinfo;

            PersonalInformationModel.findByIdAndDelete(personalinfoId, function (err, personalinfo) {
                if (err) {
                    res.send(err);
                } else {
                    console.log(personalinfo);

                    ContactInformationModel.findByIdAndDelete(contactinfoId, function (err, contactinfo) {
                        if (err) {
                            res.send(err)
                        } else {
                            console.log(contactinfo)

                            EmployeeModel.findByIdAndDelete(empdbId, function (err, employee) {
                                if (err) {
                                    res.send(err);
                                } else {
                                    res.send(employee);
                                }
                            });

                        }
                    });
                }
            });
        }
    })
});


module.exports = router;