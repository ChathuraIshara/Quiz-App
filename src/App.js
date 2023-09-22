import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/quiz';
import Result from './components/Result';
import Admin from './components/Admin';
import { useState } from 'react';



function App() {

  const [name,setName]=useState("");
  const [marks,setMarks]=useState(0);

 



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home name={name} setName={setName}/>}></Route>
        <Route path="/quiz" element={<Quiz name={name} marks={marks} setMarks={setMarks}/>}></Route>
        <Route path="/result" element={<Result  name={name} marks={marks} />}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
      </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
