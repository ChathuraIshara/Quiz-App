import { useState } from "react";
import { useLocation } from "react-router-dom";

function Result({name,marks})
{
   

    


    return <div className="container">
        <h1>results</h1>
       <h2>Name:{name}</h2>
       <h2>Results:{marks}</h2>
    </div>
}

export default Result;