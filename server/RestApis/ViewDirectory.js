var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var EmployeeModel = require('../Models/Employee')
var PersonalInformationModel = require('../Models/Personalinfo');
var ProjectInformationModel = require('../Models/Projectinfo');
var SkillInformationModel = require('../Models/Skillinfo');

router.get("/", function (req, res) {
    EmployeeModel.find().exec(function (err, employees) {
        if (err) {
            res.send(err);
        } else {
            res.send(employees);
        }
    });
});