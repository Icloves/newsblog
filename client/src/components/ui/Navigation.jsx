import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CgProfile } from 'react-icons/cg';
// import User from '../../../../server/db/models/user'

export default function Navigation() {
  const user = '1';
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="justify-content-between" mb="30px">
      <Container>
        <Navbar.Brand href="/">{user ? `Hello, ${user}` : 'Guest'}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
        {user ? (
          <Nav />
        ) : (
          <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
          </Nav>
        )}
        <NavDropdown
          title={(
            <span>
              <CgProfile size={30} />
            </span>
)}
          id="basic-nav-dropdown"
          style={{ color: 'white' }}
        >
          <NavDropdown.Item href="/">Избранное</NavDropdown.Item>
          <NavDropdown.Item href="/">
            Прочитанное
          </NavDropdown.Item>
          <NavDropdown.Item href="/">Настройки</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/">
            Выйти
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}
