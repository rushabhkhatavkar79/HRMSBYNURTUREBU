var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var SkillInformationModel=require('../Models/Skillinfo');
var EmployeeModel=require('../Models/Employee');

/**
 * Define router to get all skill data of specific employee id
 */

router.get("/:id",(req,res)=>{
    EmployeeModel.findById(req.params.id).populate('skillinfo').exec((err, skillinformation) => {
        if (err) {
            res.send(err);
        } else {
            res.send(skillinformation.skillinfo);
        }
    });
})

/**
 * Define post route for skills
 */

 router.post("/:id", function (req, res) {
    var empdbId = req.params.id;
    var employee = empdbId;
    var {name,level,certification}=req.body;
    if (!employee) {
        res.send({ status: "error", msg: "Missing body parameter :employeeid" });
        return;
    }
    var newSkill = new SkillInformationModel({
        name,level,certification,employee
    });
    newSkill.save(function (err, skillinformation) {
        if (err) {
            res.send(err);
        } else {
            EmployeeModel.findByIdAndUpdate(empdbId, { skillinfo: skillinformation._id },
                function (err, employee) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(skillinformation);
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
    var siId = req.body.siId

    SkillInformationModel.findByIdAndDelete(liId, function (err, skillinformation) {
        if (err) {
            res.send(err);
        } else {
            EmployeeModel.findByIdAndUpdate(empdbId, { skillinfo: null },
                function (err, employee) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(skillinformation);
                    }
                })
        }
    });
});

 /**
  * Define update route for skill
  */
 router.put("/",(req,res)=>{
    var {skillId,name,level,certification}=req.body;
     if(!skillId){
         res.send({status:"error",msg:"Missing parameter"});
         return;
     } 
     SkillInformationModel.findByIdAndUpdate(skillId,{$set:{name,level,certification}},(err,skill)=>{
         if(err){
             res.send(err);
         }else{
             res.send(skill);
         }
     })
 })
module.exports=router;