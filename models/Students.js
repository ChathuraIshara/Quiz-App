var mongoose=require('mongoose');

var studentschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    marks:{
        type:Number
    }
},{
    timestamps:true
});

var Student=mongoose.model('student',studentschema);

module.exports=Student;