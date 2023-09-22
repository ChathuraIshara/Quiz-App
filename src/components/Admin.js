import { useState } from "react"
import axios from "axios";
function Admin()
{
    const [question,setQuestion]=useState("");
    const [ans1,setAns1]=useState("");
    const [ans2,setAns2]=useState("");
    const [ans3,setAns3]=useState("");
    const [ans4,setAns4]=useState("");

    const [realans,setRealans]=useState(0);

    const handleQuestion=(event)=>
    {
        setQuestion(event.target.value);
    }

    const handleAns1=(event)=>
    {
        setAns1(event.target.value);
    }
    const handleAns2=(event)=>
    {
        setAns2(event.target.value);
    }
    const handleAns3=(event)=>
    {
        setAns3(event.target.value);
    }
    const handleAns4=(event)=>
    {
        setAns4(event.target.value);
    }

    const handleRealans=(event)=>
    {
        setRealans(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const answers=[ans1,ans2,ans3,ans4];
        try {
          await axios.post("http://127.0.0.1:8000/quiz", {
            title: question,
            ans: answers,
            answ: realans,
          });
          console.log("question inserted succesfully!");
          setQuestion("");
          setAns1("");
          setAns2("");
          setAns3("");
          setAns4("");
          setRealans(0);
        } catch (err) {
          console.log(err);
          alert("question Insertion Failed");
        }
      }
    


    return <div className="container">
        <h1 className="text-center">Add Your Question</h1>
        <form onSubmit={handleSubmit} method="POST">
            <div className="row">
                <div className="col-1 leading-2 m-3">Question</div>
                <div className="col-10"><input className="form-control m-3" type="text" name="question" value={question} onChange={handleQuestion}></input></div>
            </div>
            <div className="row">
                <div className="col-1 leading-2 m-3">Answer1</div>
                <div className="col-10"><input className="form-control m-3" type="text" name="ans1" value={ans1} onChange={handleAns1}></input></div>
            </div>
            <div className="row">
                <div className="col-1 leading-2 m-3">Answer2</div>
                <div className="col-10"><input className="form-control m-3" type="text" name="ans2" value={ans2} onChange={handleAns2}></input></div>
            </div>
            <div className="row">
                <div className="col-1 leading-2 m-3">Answer3</div>
                <div className="col-10"><input className="form-control m-3" type="text" name="ans3" value={ans3} onChange={handleAns3}></input></div>
            </div>
            <div className="row">
                <div className="col-1 leading-2 m-3">Answer4</div>
                <div className="col-10"><input className="form-control m-3" type="text" name="ans4" value={ans4} onChange={handleAns4}></input></div>
            </div>
            <div className="row">
                <div className="col-1 leading-2 m-3">Correct Answer</div>
                <div className="col-10"><input className="form-control m-3" type="number" name="realans" value={realans} onChange={handleRealans}></input></div>
            </div>
            <input type="submit" className="btn btn-primary" value="Add"></input>
        </form>

    </div>
}

export default Admin;