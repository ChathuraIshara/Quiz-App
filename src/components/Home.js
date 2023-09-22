import { useState } from "react";
import { Link } from "react-router-dom";
import '../Home.css'; // Import a custom CSS file for styling

function Home({ name, setName }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleName = (event) => {
    setName(event.target.value);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-5">Quiz Application</h1>
      <ul className="list-unstyled">
        <li className="mb-3 text-success">
          <span className="larger-text">
            <i className="fas fa-check-circle mr-2"></i> You will be asked 10 questions one after another
          </span>
        </li>
        <li className="mb-3 text-success">
          <span className="larger-text">
            <i className="fas fa-check-circle mr-2"></i> 10 points are awarded for the correct answer
          </span>
        </li>
        <li className="mb-3 text-success">
          <span className="larger-text">
            <i className="fas fa-check-circle mr-2"></i> Each question has three options. You can choose only one option
          </span>
        </li>
        <li className="mb-3 text-success">
          <span className="larger-text">
            <i className="fas fa-check-circle mr-2"></i> You can review and change your answer before the quiz finishes
          </span>
        </li>
        <li className="mb-3 text-success">
          <span className="larger-text">
            <i className="fas fa-check-circle mr-2"></i> The result will be declared at the end of the quiz
          </span>
        </li>
      </ul>
      <h2 className="mt-5 text-info">Enter your name</h2>
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

        <Link to={'/quiz'}>
          <button className="btn btn-warning mt-3 mb-5">Start Quiz</button>
        </Link>
      </form>
      <Link to={'/admin'}>
          <button className="btn btn-secondary mt-2">Add Quiz</button>
        </Link>
    </div>
  );
}

export default Home;
