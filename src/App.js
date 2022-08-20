import React, { useEffect, useState } from 'react';
import Mobiledivider from "./images/Mobiledivider.svg";
import Desktopdivider from "./images/Desktopdivider.svg";
import Dicey from "./images/Dicey.svg";
import  axios  from "axios";
import './App.css';

function App() {
const[data , setData] = useState({ ready:false});
// const[num ,setNum] = useState("");

  const apiResponse = (response) =>{
   setData({
    ready:true,
    advice: response.data.slip.advice,
    id:response.data.slip.id,
   });
  //  setAdvice(response.data.slip.advice);
  //  setNum(response.data.slip.id);
  }
 useEffect(()=>{
  
 })
  // const request = (url = 'https://api.adviceslip.com/advice') =>{
  //      const requestPromise = new Promise (( resolve , reject) =>{
  //       fetch(url).then((response)=> response.json()).then((json) => resolve(json)).catch((error) =>{
  //         reject(error);

  //       })
  //      })
  // return requestPromise;
  //  }


  const apiAdvice =()=>{

    let apiUrl = `https://api.adviceslip.com/advice`;
    axios.get(apiUrl).then(apiResponse);
  }

const randomAdvice = (event) =>{
  event.preventDefault();
  apiAdvice();
    
  }

if (data.ready){

  return (
    <div className="App d-block container">
      <h4 className="advice-id"> ADVICE #{data.id} </h4>
      <h3 className="advice">{data.advice}</h3>
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
} else{

  apiAdvice();
  return <h2> Something went wrong</h2>
}
}

export default App;
