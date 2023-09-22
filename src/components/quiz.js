import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Quiz({name,marks,setMarks})
{

    const [quizes,setQuizes]=useState([]);
    const [answers,setAnswers]=useState([]);
    const [currentquestion,setCurrentquestion]=useState(0);
    
   
    
    

    useEffect(() => {
        fetch("http://127.0.0.1:8000/quiz")
          .then((response) => {
            //console.log(response);
            return response.json();
          })
          .then((responseData) => {
            // console.log(responseData);
            setQuizes(responseData);
          });
      });

      const handleNext=()=>
      {
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach((radioButton) => {
          radioButton.checked = false;
        });
        setCurrentquestion(currentquestion+1);
       
      }

      const handleAnswer=(event)=>
      {
        var updatedAnswers=[...answers];
        updatedAnswers[currentquestion]=Number(event.target.value)+1;
        setAnswers(updatedAnswers);

       
      }

      const handleSubmit=()=>
      {
        var totalmarks=0;
        for(var i=0;i<answers.length;i++)
        {
            if(answers[i]==quizes[i].answ)
            {
               totalmarks+=10;
            }
        }
        setMarks(totalmarks);


       
       
        



      }



    return <div className="container">
        <div>
            <h1 className="display-2">
                {quizes[currentquestion]?.title}
            </h1>
            <ol className="list-unstyled">
                {quizes[currentquestion]?.ans.map((item,index)=>(<li key={index}>
                    <label className="m-2"> <input type="radio"  value={index} name="options" onChange={handleAnswer}></input>{item}</label>
                  
                </li>))}
            </ol>
            {currentquestion==9 ?(<Link to={'/result'} ><button className="btn btn-success" onClick={handleSubmit}>Submit</button></Link>): <button className="btn btn-success" onClick={handleNext}>Next</button>}
          
        </div>
        <div>
        {answers.map((item,key)=>(<p key={key}>{item}</p>))}
        </div>
        <p>{name}</p>
      


    </div>
}

export default Quiz;