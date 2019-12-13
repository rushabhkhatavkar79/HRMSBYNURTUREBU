var mongoose=require('mongoose');

const LeaveInformationSchema=new mongoose.Schema({
    leaveType:{type:String,required:true},
    fromDate:{type:Date,required:true},
    toDate:{type:Date,required:true},
    noOfDays:Number,
    comments:String,
    allotedLeave:{type:Number,default:21},
    leaveBalance:Number,
    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }
})

const LeaveInformation=mongoose.model('LeaveInformation',LeaveInformationSchema);
module.exports=LeaveInformation;