var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var LeaveInformationModel=require('../Models/Leaveinfo');
var EmployeeModel=require('../Models/Employee');

var allotedLeave=21;
/**
 * Define router to get all leave data of specific employee id
 */

router.get("/:id",(req,res)=>{
    EmployeeModel.findById(req.params.id).populate('leaveinfo').exec((err, leaveinformation) => {
        if (err) {
            res.send(err);
        } else {
            res.send(leaveinformation.leaveinfo);
        }
    });
})

/**
 * Define post route for leave
 */

 router.post("/:id", function (req, res) {
    var empdbId = req.params.id;
    var employee = empdbId;
    var {leaveType,fromDate,toDate,comments}=req.body;
     fromDate=new Date(fromDate);
     toDate=new Date(toDate);
     var noOfDays=(toDate.getDate() - fromDate.getDate())+1;
    var leaveBalance=allotedLeave-noOfDays;
    allotedLeave=leaveBalance;
    if (!employee) {
        res.send({ status: "error", msg: "Missing body parameter :employeeid" });
        return;
    }
    var newLeave = new LeaveInformationModel({
        leaveType,fromDate,toDate,noOfDays,comments,leaveBalance,employee
    });
    newLeave.save(function (err, leaveinformation) {
        if (err) {
            res.send(err);
        } else {
            EmployeeModel.findByIdAndUpdate(empdbId, { leaveinfo: leaveinformation._id },
                function (err, employee) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(leaveinformation);
                    }
                })
        }
    });
});


/**
* Delete  no id route for error handling
*/
router.delete("/", function (req, res) {
    res.send({
        status: "error",
        msg: "Missing url parameter : /:id"
    });
});

/**
 * Define route to delete an Leave Information
 */
router.delete("/:id", function (req, res) {
    var empdbId = req.params.id;
    var liId = req.body.liId

    LeaveInformationModel.findByIdAndDelete(liId, function (err, leaveinformation) {
        if (err) {
            res.send(err);
        } else {
            EmployeeModel.findByIdAndUpdate(empdbId, { leaveinfo: null },
                function (err, employee) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(leaveinformation);
                    }
                })
        }
    });
});

 /**
  * Define update route for leave
  */
 router.put("/",(req,res)=>{
    var {leaveId,leaveType,fromDate,toDate,comments}=req.body;
     fromDate=new Date(fromDate);
     toDate=new Date(toDate);
     var noOfDays=(toDate.getDate() - fromDate.getDate())+1;
     var leaveBalance=allotedLeave-noOfDays;
     allotedLeave=leaveBalance;
     if(!leaveId){
         res.send({status:"error",msg:"Missing parameter"});
         return;
     } 
     LeaveInformationModel.findByIdAndUpdate(leaveId,{$set:{leaveType,fromDate,toDate,comments,leaveBalance}},(err,leave)=>{
         if(err){
             res.send(err);
         }else{
             res.send(leave);
         }
     })
 })
module.exports=router;