import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import '../quiz.css'; // Import a custom CSS file for styling

function Quiz({ name, marks, setMarks }) {
  const [quizes, setQuizes] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentquestion, setCurrentquestion] = useState(0);

  useEffect(() => {
    
    fetch("http://127.0.0.1:8000/quiz")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setQuizes(responseData);
      });
  }, []);

  const handleNext = () => {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radioButton) => {
      radioButton.checked = false;
    });
    setCurrentquestion(currentquestion + 1);
  }

  const handlePrevious=()=>
  {
    setCurrentquestion(currentquestion-1);
  }

  const handleAnswer = (event) => {
    var updatedAnswers = [...answers];
    updatedAnswers[currentquestion] = Number(event.target.value) + 1;
    setAnswers(updatedAnswers);
  }

  async function handleSubmit(event) {
    var totalmarks = 0;
    for (var i = 0; i < answers.length; i++) {
      if (answers[i] == quizes[i].answ) {
        totalmarks += 10;
      }
    }
    setMarks(totalmarks);

    try {
      await axios.post("http://127.0.0.1:8000/student", {
        name: name,
        marks: totalmarks,
      });
      console.log("Student results inserted successfully!");
    } catch (err) {
      console.log(err);
      alert("Result Insertion Failed");
    }
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center align-items-center flex-column"> {/* Center the content */}
        <h1 className="display-4 text-primary mb-4">
          {quizes[currentquestion]?.title}
        </h1>
        <div className="custom-radio-group">
          {quizes[currentquestion]?.ans.map((item, index) => (
            <label key={index} className="custom-radio-label">
              <input
                type="radio"
                value={index}
                name="options"
                onChange={handleAnswer}
                className="custom-radio" // Apply custom radio class
              />
              {item}
            </label>
          ))}
        </div>
        <div className="row">
          <div className="col">
          {currentquestion>=1 ?(<button onClick={handlePrevious} className="btn btn-warning">Previous</button>):(null)}

          </div>
          <div className="col">
          {currentquestion === 9 ? (
          <Link to={'/result'}>
            <button className="btn btn-success" onClick={handleSubmit}>
              Submit
            </button>
          </Link>
        ) : (
          <button className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
        )}

          </div>
        </div>
      
      
      </div>
    </div>
  );
}

export default Quiz;
