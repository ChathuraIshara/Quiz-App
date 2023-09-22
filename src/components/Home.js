import { useState } from "react";
import { Link } from "react-router-dom";

function Home({name,setName})
{
   


    const handleSubmit=(event)=>
    {
        event.preventDefault();
        

    }

    const handleName=(event)=>
    {
        setName(event.target.value);

    }


    return <div className="container">
         <h1 className="text-center m-5">Quiz Application</h1>
        <ol className="list-unstyled">
            <li className="mb-2">You will be asked 10 questions one after another</li>
            <li className="mb-2">10 point is awarded for the correct answer</li>
            <li className="mb-2">Each question has three options.You can choose only one option</li>
            <li className="mb-2">You can review and change answer before the quiz finish</li>
            <li className="mb-2">The result will be declared at the end of the quiz</li>
        </ol>
        <h2 className="leading-2">Enter your name</h2>
        <form onSubmit={handleSubmit}>
            <div className="row justify-content-center">
                <div className="col-6 text-center">
                <input onChange={handleName} type="text" name="fname" placeholder="Enter your name" className="form-control mb-5 mt-3"></input>

                </div>
            </div>
         
            <Link to={'/quiz'} >
        <button  className="btn btn-dark">Start Quiz</button>
        </Link>

        </form>
       
    </div>



}
export default Home;