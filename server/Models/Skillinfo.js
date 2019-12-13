var mongoose=require('mongoose');

const SkillInformationSchema=new mongoose.Schema({
    name:{type:String,required:true},
    level:{type:String,required:true},
    certification:String,
    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }
})

const SkillInformation=mongoose.model('SkillInformation',SkillInformationSchema);
module.exports=SkillInformation;