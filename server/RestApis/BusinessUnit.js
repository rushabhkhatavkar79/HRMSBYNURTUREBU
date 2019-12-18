var express = require("express");
var router = express.Router();
var BusinessModel = require('../Models/BusinessUnit');
//define router to get all Business unit

router.get("/", function (req, res) {
    BusinessModel.find().exec(function (err, business) {
        if (err) {
            res.send(err);
        } else {
            res.send(business);
        }
    });
});

//define router to get business unit by id
router.get("/:id", function (req, res) {
    BusinessModel.findById(req.params.id).exec(function (err, business) {
        if (err) {
            res.send(err);
        } else {
            res.send(business);
        }
    });
});

//define router to create a business unit
router.post("/", function (req, res) {
    var bu_name = req.body.bu_name;
    var bu_type = req.body.bu_type;
    var bu_head = req.body.bu_head;
    var projectinfo = req.body.projectinfo;


    if (!bu_name || !bu_type || !bu_head) {
        res.send({ status: "error", msg: "Missing body parameter : name,type" });
        return;
    }

    var business = new BusinessModel({
        bu_name: bu_name,
        bu_type: bu_type,
        bu_head: bu_head,
        projectinfo: projectinfo
    });

    business.save(function (err, business) {
        if (err) {
            res.send(err);
        } else {
            res.send(business);
        }
    });
});

//define  route to update a businees unit


router.put("/:id", function (req, res) {
    var bu_head = req.body.bu_head;
    var bu_name = req.body.bu_name;
    var bu_type = req.body.bu_type;
    var id = req.params.id;
    if (!bu_head || !bu_name || !bu_type) {
        res.send({
            status: "error",
            msg: "Missing body parameter : bu_head,bu_name,bu_type"
        });
        return;
    }

    var toUpdate = {};
    bu_head && (toUpdate.bu_head = bu_head);
    bu_name && (toUpdate.bu_name = bu_name);
    bu_type && (toUpdate.bu_type = bu_type);

    BusinessModel.findByIdAndUpdate(id, toUpdate, function (err, business) {
        if (err) {
            res.send(err);
        } else {
            res.send(business);
        }
    });

});

module.exports = router;
