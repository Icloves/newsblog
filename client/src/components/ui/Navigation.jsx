import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navigation() {
  const user = 'Ф';
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="justify-content-between">
      <Container>
        <Navbar.Brand href="/">{user ? `Hello, ${user}` : 'Guest'}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
        {user ? (
          <Nav>
            <Nav.Link as={Link} to="/account">Account</Nav.Link>
            <Button>Logout</Button>
          </Nav>
        ) : (
          <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
          </Nav>
        )}
        <NavDropdown title="Профиль" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Separated link
          </NavDropdown.Item>
        </NavDropdown>

      </Container>
    </Navbar>
  );
}
