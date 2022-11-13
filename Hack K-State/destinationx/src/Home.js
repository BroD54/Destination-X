import React from 'react';
import {Card, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';

const Home = () => {
  return (
    <div className="Home">
        <h1>Destination <span style={{color: "red", fontSize: '3rem', fontWeight: "bold"}}>X</span></h1>
        <p className="description">Destination <span style={{color: "red", fontSize: '1.5rem', fontWeight: "bold"}}>X</span> is an educational game where the player attempts to find the given destination based on their knowledge of the place and clues provided.
            The goal of the game is to identify as many destinations as possible before running out of clues or incorrectly identifying five
            destinations.
        </p>
        <Container className="cards">
            <Row>
            <Col>
                    <Card className = "Normal" >
                        <Card.Body>
                            <Card.Title>Play</Card.Title>
                            <Card.Text>
                            Traditional game mode: <br></br>
                            Destinations include countries and territories all across the world!
                            </Card.Text>
                            <Card.Link href="/play">Start Playing!</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title>Learn</Card.Title>
                            <Card.Text>
                            Learn more about the destinations so you can improve at the game and expand your knowledge!
                            </Card.Text>
                            <Card.Link href="/learn">Discover!</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title>Space</Card.Title>
                            <Card.Text>
                            Explore our Solar System in this unique game mode, which includes all objects in our Solar System!
                            </Card.Text>
                            <Card.Link href="/space">Explore Space!</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>


    </div>
  )
}

export default Home