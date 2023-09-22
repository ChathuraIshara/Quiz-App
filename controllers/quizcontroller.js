var Quiz=require('../models/Quiz');


var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });



var quizcontroller=(app)=>
{
    app.get('/quiz',async function(req,res)
    {
        try{
            var quizes=await Quiz.find({});
            res.status(200).json(quizes);

        }catch(err)
        {
            console.log(err.message);
            res.status(500).json({message:err.message});
        }
    });

    app.post('/quiz',urlencodedParser,async function(req,res)
    {
        try{
            var quiz=await Quiz.create(req.body);
            res.status(200).json(quiz);

        }catch(err)
        {
            console.log(err.message);
            res.status(500).json({message:err.message});
        }
    });
}

module.exports=quizcontroller;