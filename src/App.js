import Desktopdivider from "./images/Desktopdivider.svg";
import Dicey from "./images/Dicey.svg";
import { axios } from "axios";
import './App.css';

function App() {


  const apiResponse = (response) =>{
    console.log(response.data);
  }


const randomAdvice = (event) =>{
  event.preventDefault();
  let apiUrl = `https://api.adviceslip.com/advice`;
  axios.get(apiUrl).then(apiResponse);
    
  }


  return (
    <div className="App">
      <h4 className='advice-id'> ADVICE #117</h4>
      <h3 className='advice'>
          "it is easy to sit up and take notice, what is dificult is getting up and taking action"
      </h3>
      <img src={Desktopdivider} />
      <img className="dice" onClick={randomAdvice} src={Dicey} />
    </div>
  );
}

export default App;
