import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Home.css'; // Import a custom CSS file for styling
import { useNavigate } from "react-router-dom";

function Home({ name, setName }) {
  const [err,setErr]=useState("");

  const navigate=useNavigate();

  useEffect(()=>
  {
     // Disable the back button by pushing a new state to the history
     window.history.pushState(null, "", window.location.href);
    
     // Add a listener to handle back button clicks
     window.addEventListener("popstate", () => {
       // Push the current state back to prevent navigation
       window.history.pushState(null, "", window.location.href);
     });
 
     // Clean up the event listener when the component unmounts
     return () => {
       window.removeEventListener("popstate", () => {
         window.history.pushState(null, "", window.location.href);
       });
     };
   }, []);
 


  const handleSubmit = (event) => {
    event.preventDefault();
    if(name=="")
    {
      setErr("Please Enter your name!");

    }
    else{
      setErr("");
      navigate('/quiz');

    }
  }

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleCloseError = () => {
    setErr("");
  };



  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-5">Quiz Application</h1>
      <ul className="list-unstyled">
        <li className="mb-3 text-success">
          <span className="larger-text">
            <i className="fas fa-check-circle mr-2"></i> You will be asked 10 questions one after another.
          </span>
        </li>
        <li className="mb-3 text-success">
          <span className="larger-text">
            <i className="fas fa-check-circle mr-2"></i> 10 points are awarded for the correct answer.
          </span>
        </li>
        <li className="mb-3 text-success">
          <span className="larger-text">
            <i className="fas fa-check-circle mr-2"></i> Each question has three options. You can choose only one option.
          </span>
        </li>
        <li className="mb-3 text-success">
          <span className="larger-text">
            <i className="fas fa-check-circle mr-2"></i> You can review and change your answer before the quiz finishes.
          </span>
        </li>
        <li className="mb-3 text-success">
          <span className="larger-text">
            <i className="fas fa-check-circle mr-2"></i> The result will be declared at the end of the quiz.
          </span>
        </li>
      </ul>
      <h2 className="mt-5 text-info">Enter your name</h2>
      {err && (
            <div className="alert alert-danger" role="alert">
              <button
                onClick={handleCloseError}
                className="close"
                type="button"
                data-dismiss="alert"
                aria-hidden={err ? "true" : "false"}
              >
                x
              </button>
              {err}
            </div>
          )}
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-6 text-center">
            <input
              onChange={handleName}
              type="text"
              name="fname"
              placeholder="Enter your name"
              className="form-control mb-3 mt-3 custom-input" // Apply custom input class
            />
          </div>
        </div>

          <input type="submit"  className="btn btn-warning mt-3 mb-5" value="Start Quiz"></input>
       
      </form>
      <Link to={'/admin'}>
          <button className="btn btn-secondary mt-2">Add Quiz</button>
        </Link>
    </div>
  );
}

export default Home;
