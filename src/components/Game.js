import React from 'react';
import {useState, useEffect} from 'react'
import Clue from './Clue.js';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';

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
        "area": country.area.toLocaleString('en-US'),
        "population": country.population.toLocaleString('en-US'),
        "carside": country.car.side,
        "flag": country.flags.png,
        "independent": (country.independent == null) ? null : country.independent.toString(),
        "landlocked": country.landlocked.toString(),
        "latlong": (country.capitalInfo.latlng == null) ? null : Object.entries(country.capitalInfo.latlng).map(l => l[1]),
        "gini": (country.gini == null) ? null : Object.entries(country.gini).map(gini => gini[1])[0],
        "coatofarms": country.coatOfArms.png
    }
  }


  if (country.clues.borders === null){
    country.clues.borders = "No borders";
  }

  const [guess, setGuess] = useState("");
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  let [wrong, setWrong] = useState([]);
  const [gameover, setGameover] = useState(false);
  let [clues, setClues] = useState([]);
  const [final, setFinal] = useState(false);
  const [restart, setRestart] = useState(false);

  const handleBtnClick = e => {
    e.preventDefault();
    if (guess.toLowerCase() === country.name.toLowerCase()){
        setCorrect(true);
        setScore(score + 1);
    } else{
        setWrong([...wrong, guess]);
        setGameover(wrong.length + 1  === 5);
    }
    setGuess("");

  };

  const clueUse = (type) => {
    setClues([...clues, type])

    let clueCount = Object.entries(country.clues).filter(clue => clue[1] != null).length;
    setFinal(clueCount === clues.length + 1);
  }

  const finalGuess = (e) => {
    e.preventDefault();
    if (guess.toLowerCase() === country.name.toLowerCase()){
        setCorrect(true);
        setScore(score + 1);
    } else{
        setWrong([...wrong, guess]);
    }
    let clueCount = Object.entries(country.clues).filter(clue => clue[1] != null).length;
    setGameover(clueCount === clues.length);
  }

  const refresh = () => {
    newCountry();
    setCorrect(false);
    setRestart(true);
  }

  const newGame = () => {
    window.location.reload();
  }

  return (
    <div>
      {gameover ? 
      <div>
        <Card className="gameOver">
          <Card.Body>
            <Card.Title>Game Over!</Card.Title>
            <Card.Subtitle>The destination was {country.name}</Card.Subtitle>
            <Card.Text>
              Score: {score}<br></br>
              Misses: {wrong.length}
            </Card.Text>
            <Button variant="dark" onClick={newGame} className="newGame">Start A New Game</Button>
          </Card.Body>
        </Card>
      </div> :
      <div>
        <h1>Score: {score}</h1>
        <Form>
            <Form.Label>
                <Form.Control type="text" name="guess" placeholder="Destination..." value={guess} onChange={e => setGuess(e.target.value)} />
            </Form.Label>
            {final ? <Button variant="dark" type="submit" onClick={finalGuess} disabled={correct} >Submit</Button>: <Button variant="dark" type="submit" onClick={handleBtnClick} disabled={correct} >Submit</Button>}
        </Form>

        {correct && <h2 key = {country.name}><u>The destination was {country.name}</u></h2>}

        Guesses: {wrong.length > 0 ? (wrong.length > 1 ? wrong.join(", ") : wrong) : "none"}

        <Container>
          <Row>
          <Col>
            {Object.entries(country.clues).slice(0, Object.entries(country.clues).length / 3).map(clue=> (
              clue[1] != null &&
              <Clue key={clue[0]} restart={restart} setRestart={setRestart} type = {clue[0]} ans = {clue[1]} clueUse = {clueUse} isDisabled={clues.indexOf(clue[0]) < 0} />
            ))}
            </Col>
            <Col>
            {Object.entries(country.clues).slice(Object.entries(country.clues).length / 3, Object.entries(country.clues).length / 3 * 2).map(clue=> (
              clue[1] != null &&
              <Clue key={clue[0]} restart={restart} setRestart={setRestart} type = {clue[0]} ans = {clue[1]} clueUse = {clueUse} isDisabled={clues.indexOf(clue[0]) < 0} />
            ))}
            </Col>
            <Col>
            {Object.entries(country.clues).slice(Object.entries(country.clues).length / 3 * 2, Object.entries(country.clues).length).map(clue=> (
              clue[1] != null &&
              <Clue key={clue[0]} restart={restart} setRestart={setRestart} type = {clue[0]} ans = {clue[1]} clueUse = {clueUse} isDisabled={clues.indexOf(clue[0]) < 0} />
            ))}
            </Col>
          </Row>
        </Container>

        {correct && <Button onClick={refresh}>Continue</Button>}

      </div>
      } 
    </div>
  )
}

export default Game