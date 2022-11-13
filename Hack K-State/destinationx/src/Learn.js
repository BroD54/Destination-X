import React from 'react';
import {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Country from './components/Country';
const Learn = () => {
  const getNumbers = () => {
    let nums = [];
    for(let i = 0; i < 6; i++){
        nums[i] = Math.floor(Math.random() * 250) + 1;
    }
    return setNumbers(nums);
  }

  let [countries, setCountries] = useState();
  let [numbers, setNumbers] = useState();
  useEffect(() => {
    async function getCountries() {
        let resp = await fetch("https://restcountries.com/v3.1/all");
        resp = await resp.json();
        setCountries(resp);
        getNumbers();
    }
    getCountries();
  }, [])
  
  return (
    <div className="Learn">
        {countries != null ? (
            <Container>
                <Row>
                    <Col></Col>
                    <Col><h1>Learn:</h1></Col>
                    <Col><Button variant="primary" onClick={getNumbers} >New Destinations</Button></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col><Country country={countries[numbers[0]]} /></Col>
                    <Col><Country country={countries[numbers[1]]} /></Col>
                    <Col><Country country={countries[numbers[2]]} /></Col>
                </Row>
                <Row>
                    <Col><Country country={countries[numbers[3]]} /></Col>
                    <Col><Country country={countries[numbers[4]]} /></Col>
                    <Col><Country country={countries[numbers[5]]} /></Col>
                </Row>
            </Container>
        ): "Loading"}
    </div>
  )
}

export default Learn