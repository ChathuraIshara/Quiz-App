var express=require('express');
var mongoose=require('mongoose');
var cors=require('cors');

var studentcontroller=require('./controllers/studentcontroller');


var quizcontroller=require('./controllers/quizcontroller');

var app=express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://chathura:test@cluster0.kkdmc6p.mongodb.net/quizapp?retryWrites=true&w=majority');

quizcontroller(app);
studentcontroller(app);



app.listen(8000,()=>
{
    console.log("Node is listening to the port 8000!");
});



