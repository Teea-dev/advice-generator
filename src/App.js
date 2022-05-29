import React, { useState } from 'react';

import Desktopdivider from "./images/Desktopdivider.svg";
import Dicey from "./images/Dicey.svg";
import  axios  from "axios";
import './App.css';

function App() {
const[advice , setAdvice] = useState("");
const[num ,setNum] = useState("");

  const apiResponse = (response) =>{
   
   setAdvice(response.data.slip.advice);
   setNum(response.data.slip.id);
  }


const randomAdvice = (event) =>{
  event.preventDefault();
  
  let apiUrl = `https://api.adviceslip.com/advice`;
  axios.get(apiUrl).then(apiResponse);
    
  }


  return (
    <div className="App">
      <h4 className='advice-id'> ADVICE #{num} </h4>
      <h3 className='advice'>
          
          {advice}
      </h3>
      <img src={Desktopdivider} />
      <img className="dice" onClick={randomAdvice} src={Dicey} />
    </div>
  );
}

export default App;
