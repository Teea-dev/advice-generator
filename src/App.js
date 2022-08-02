import React, { useState } from 'react';
import Mobiledivider from "./images/Mobiledivider.svg";
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
    <div className="App d-block container">
      <h4 className="advice-id"> ADVICE #{num} </h4>
      <h3 className="advice">{advice}</h3>
      <div className=" d-block d-md-none">
        <img className='mobile' src={Mobiledivider} alt="" />
      </div>
      <div className="d-none d-md-block">
        <img src={Desktopdivider}  alt=""/>
      </div>
      <div className="dice btn mt-2">
        <img onClick={randomAdvice} src={Dicey} alt="" />
      </div>
    </div>
  );
}

export default App;
