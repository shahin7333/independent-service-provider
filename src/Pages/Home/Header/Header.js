import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo/logo.png';

import './Header.css'

const Header = () => {
  return (
    <Navbar className='nav-bar' sticky='top' collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className='logo-nav text-white' as={Link} to="/"><img height='30' src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-white"></Nav>
          <Nav>
            <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className='text-white' href="home#discount">Discount</Nav.Link>
            <Nav.Link className='text-white' href="home#services">
             Services
            </Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
