import React from 'react'
import {Navbar,Container,Nav } from "react-bootstrap"
const NavBar = () => {
  return (
    <div>
         <Navbar bg="dark" variant="dark" color='a4b0f5'>
        <Container>
          <Navbar.Brand href="/">MERN</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Contacts">Contacts</Nav.Link>
            <Nav.Link href="/Add">Add</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
