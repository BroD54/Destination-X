import {useState, useEffect} from 'react'
import Navbar from './components/Navbar.js'
import Game from './components/Game.js'
import './App.css';

function App() {
  const [country, setCountry] = useState();
  const[getNew, setGetNew] = useState(false);
  useEffect(() => {
    async function getCountry() {
      let resp = await fetch("https://restcountries.com/v3.1/all");
      resp = await resp.json();
      let num = Math.floor(Math.random() * resp.length);
      setCountry(resp[num]);
    }
    getCountry();
  }, [getNew])

  const newCountry = () => {
    setGetNew(!getNew);
  }

  return (
    <div className="App">
        <Navbar /> 
        {country ?
          <Game  country = {country} newCountry ={newCountry} />
         : 
          <h1>Loading</h1>
        }
    </div>
  );
}

export default App;
