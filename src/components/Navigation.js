import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navigation">
        <Container>
          <Navbar.Brand href="/" className="navTitle">Destination <span style={{color: "red", fontSize: '1.5rem'}}>X</span></Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="/play">Play</Nav.Link>
            <Nav.Link href="/learn">Learn</Nav.Link>
            <Nav.Link href="/space">Space</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation