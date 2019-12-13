var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var EmployeeModel = require('../Models/Employee')
var PersonalInformationModel = require('../Models/Personalinfo');
var ContactInformationModel = require('../Models/Contactinfo');


/**
 * Define router the get all Person Contact Information
 */
router.get("/:id", function (req, res) {

    EmployeeModel.findById(req.params.id).populate('contactinfo').exec((err, contactinformation) => {
        if (err) {
            res.send(err);
        } else {
            res.send(contactinformation.contactinfo);
        }
    });
});

/**
* Define router to create a Person Contact Information
*/
router.post("/:id", function (req, res) {
    var empdbId = req.params.id;
    var address = req.body.address;
    var mobile = req.body.mobile;
    var workemail = req.body.workemail;
    var employee = empdbId;

    if (!address || !mobile || !workemail) {
        res.send({ status: "error", msg: "Missing body parameter : address, mobile, workemail" });
        return;
    }
    var contactinformation = new ContactInformationModel({
        address: address,
        mobile: mobile,
        workemail: workemail,
        employee: employee
    });
    contactinformation.save(function (err, contactinformation) {
        if (err) {
            res.send(err);
        } else {
            //res.send(personalinformation);
            EmployeeModel.findByIdAndUpdate(empdbId, { contactinfo: contactinformation._id },
                function (err, contact) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(contactinformation);
                    }
                })
        }
    });
});

/**
* Define route to update a Personal Information
*/

router.put("/:id", function (req, res) {
    var ciId = req.body.ciId;
    var address = req.body.address;
    var mobile = req.body.mobile;
    var workemail = req.body.workemail;

    if (!ciId || !address || !mobile || !workemail) {
        res.send({
            status: "error",
            msg: "Missing body parameter : ciId, address, mobile, workemail"
        });
        return;
    }

    var toUpdate = {};
    address && (toUpdate.address = address);
    mobile && (toUpdate.mobile = mobile);
    workemail && (toUpdate.workemail = workemail);

    ContactInformationModel.findByIdAndUpdate(ciId, toUpdate, function (err, contactinformation) {
        if (err) {
            res.send(err);
        } else {
            res.send(contactinformation);
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
 * Define route to delete an Person Contact Information
 */
router.delete("/:id", function (req, res) {
    var empdbId = req.params.id;
    var ciId = req.body.ciId

    ContactInformationModel.findByIdAndDelete(ciId, function (err, contactinformation) {
        if (err) {
            res.send(err);
        } else {
            EmployeeModel.findByIdAndUpdate(empdbId, { contactinfo: null },
                function (err, employee) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(contactinformation);
                    }
                })
            //res.send(personalinformation);
        }
    });
});


module.exports = router;