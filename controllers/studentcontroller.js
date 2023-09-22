var mongoose=require('mongoose');

var Student=require('../models/Students');

var studentcontroller=(app)=>
{
    app.post('/student',async function(req,res)
    {
        try{
            var student=await Student.create(req.body);
            res.status(200).json(student);

        }catch(err)
        {
            console.log(err.message);
            res.status(500).json({message:err.message});
        }
    });

    app.get('/result',async function(req,res)
    {
        try{
            var results=await Student.find({});
            res.status(200).json(results);

        }catch(err)
        {
            console.log(err.message);
            res.status(500).json({message:err.message});
        }
    });
}

module.exports=studentcontroller;