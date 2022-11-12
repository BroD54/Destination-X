import React from 'react';
import {useState, useEffect} from 'react'
import Clue from './Clue.js';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Game = ({country, newCountry}) => {
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
  const [score, setScore] = useState(0);
  let [wrong, setWrong] = useState([]);
  const [gameover, setGameover] = useState(false);
  let [clues, setClues] = useState([]);
  const [final, setFinal] = useState(false);
  const handleBtnClick = e => {
    e.preventDefault();
    if (guess.guess === country.name){
        setCorrect(true);
        setScore(score + 1);
    } else{
        setWrong([...wrong, guess.guess]);
        setGameover(wrong.length + 1  === 5);
    }
    
  };

  const clueUse = (type) => {
    setClues([...clues, type])

    let clueCount = Object.entries(country.clues).filter(clue => clue != null).length;
    setFinal(clueCount === clues.length + 1);
  }

  const finalGuess = (e) => {
    e.preventDefault();
    if (guess.guess === country.name){
        setCorrect(true);
        setScore(score + 1);
    } else{
        setWrong([...wrong, guess.guess]);
    }
    let clueCount = Object.entries(country.clues).filter(clue => clue != null).length;
    setGameover(clueCount === clues.length);
  }

  const refresh = () => {
    newCountry();
    setCorrect(false);
  }

  const newGame = () => {
    window.location.reload();
  }

  return (
    <div>
      {gameover ? 
      <div>
        <h1>Game Over! Final Score: {score}, Misses: {wrong.length}</h1>
        <Button onClick={newGame} >Start A New Game</Button>
      </div> :
      <div>
        <h1>Score: {score}</h1>
        {correct && <h1 key = {country.name}><u>The destination was {country.name}!</u></h1>}
        {correct && <Button onClick={refresh}>Continue</Button>}
        <Form>
            <Form.Label>
                Guesses: {wrong.length > 0 ? (wrong.length > 1 ? wrong.join(", ") : wrong) : "none"}
                <Form.Control type="text" name="guess" placeholder="Destination..." onChange={e => setGuess({ ...guess, guess: e.target.value })} />
            </Form.Label>
            {final ? <Button type="submit" onClick={finalGuess} disabled={correct} >Submit</Button>: <Button type="submit" onClick={handleBtnClick} disabled={correct} >Submit</Button>}
        </Form>
        

        <Container>
          <Row>
            <Col>
            
            </Col>
          </Row>
        </Container>

        <ul>
            {Object.entries(country.clues).map(clue => (
                clue[1] != null &&
                <li key={clue}>
                  <Clue type = {clue[0]} ans = {clue[1]} clueUse = {clueUse} isDisabled={clues.indexOf(clue[0]) < 0} />
                </li>
            ))}
        </ul>
      </div>
      } 
    </div>
  )
}

export default Game