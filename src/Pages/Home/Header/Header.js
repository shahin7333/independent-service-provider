import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'

import './Header.css'

const Header = () => {
  return (
    <Navbar className='nav-bar' collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className='logo-nav text-white' href="#home">THE MEMORY MAKER</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-white"></Nav>
          <Nav>
            <Nav.Link className='text-white' href="#deets">More deets</Nav.Link>
            <Nav.Link className='text-white' eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            <Nav.Link className='text-white' href="#features">Features</Nav.Link>
            <Nav.Link className='text-white' href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
