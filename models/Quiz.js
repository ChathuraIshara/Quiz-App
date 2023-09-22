var mongoose=require('mongoose');

var quizschema=new mongoose.Schema({
    title:{
        type:String,
    }
    ,
   ans:[
    {
        type:String,

    }
]
   
   ,
   answ:{
    type:Number,
   }
},
{
    timestamps:true
});


var Quiz=mongoose.model('quiz',quizschema);

module.exports=Quiz;