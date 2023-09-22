import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Result({ name, marks }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/result")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setResults(responseData);
      });
  }, []); // Add an empty dependency array to ensure the effect runs only once

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-5">End of the Questions!</h1>
      <h2 className="mb-4 text-info">Name: {name}</h2>
      <h2 className="mb-4 text-success">Your Marks: {marks}</h2>

      <h1 className="text-center m-5 text-danger">Top Rank Students</h1>

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th className="text-light">Name</th>
            <th className="text-light">Marks</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, key) => (
            <tr key={key}>
              <td className="text-primary">{item.name}</td>
              <td className="text-warning">{item.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={'/'}>
          <button className="btn btn-danger mt-5 mb-2">Go-back-to Main Page</button>
        </Link>
    </div>
  );
}

export default Result;
