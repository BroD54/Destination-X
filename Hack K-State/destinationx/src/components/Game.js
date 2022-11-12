import React from 'react';
import {useState, useEffect} from 'react'
import Clue from './Clue.js';
const Game = ({country}) => {
  country = {
    "name": country.name.common,
    "clues": {
        "currency": (country.currencies == null) ? null : Object.entries(country.currencies).map(curr => curr[1].name),
        "capital": (country.capital == null) ? null : Object.entries(country.capital).map(cap => cap[1]),
        "region": country.region,
        "subregion": country.subregion,
        "languages": (country.languages == null) ? null : Object.entries(country.languages).map(lang => lang[1]),
        "borders": (country.borders == null) ? null : Object.entries(country.borders).map(border => border[1]),
        "area": country.area,
        "population": country.population,
        "carside": country.car.side,
        "flag": country.flags.png,
        "independent": country.independent.toString(),
        "landlocked": country.landlocked.toString(),
        "latlong": (country.capitalInfo.latlng == null) ? null : Object.entries(country.capitalInfo.latlng).map(l => l[1]),
        "gini": (country.gini == null) ? null : Object.entries(country.gini).map(gini => gini[1])[0],
        "coatofarms": country.coatOfArms.png
    }
  }
  if (country.clues.borders === null){
    country.clues.borders = "No borders";
  }

  const [guess, setGuess] = useState();
  const [correct, setCorrect] = useState(false);
  let [wrong, setWrong] = useState(0);

  const handleBtnClick = e => {
    e.preventDefault();
    if (guess.guess === country.name){
        setCorrect(true);
    } else{
        setWrong(wrong++);
    }
    
  };

  return (
    <div>
        {correct && <h1 key = {country.name}><u>The Country was {country.name}! <br></br> {wrong} wrong guesses made</u></h1>}
        
        <form>
            <label>
                Guess:
                <input type="text" name="guess" placeholder="guess" onChange={e => setGuess({ ...guess, guess: e.target.value })} />
            </label>
            <input type="submit" onClick={handleBtnClick} />
        </form>
        
        <ul>
            {Object.entries(country.clues).map(clue => (
                clue[1] != null &&
                <li key={clue}>
                    <Clue type = {clue[0]} ans = {clue[1]} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Game