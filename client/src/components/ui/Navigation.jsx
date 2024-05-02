import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CgProfile } from 'react-icons/cg';
import { GiNewspaper } from 'react-icons/gi';
// import User from '../../../../server/db/models/user'

export default function Navigation({ user, logoutHandler }) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="justify-content-between" mb="30px">
        <Container>
          <Navbar.Brand>
            {' '}
            <GiNewspaper size={50} style={{ color: 'white' }} />
            {' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/news">Все новости</Nav.Link>
          </Nav>
          {user ? (
            <Nav />
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/">Войти</Nav.Link>
              <Nav.Link as={Link} to="/signup">Регистрация</Nav.Link>
            </Nav>
          )}
          <Navbar.Brand as={Link} to="/profile">{user ? `${user.name}` : ''}</Navbar.Brand>

          <NavDropdown
            title={(
              <span>
                <CgProfile size={30} />
              </span>
)}
            id="basic-nav-dropdown"
            style={{ color: 'white' }}
          >
            <NavDropdown.Item href="/profile">Профиль</NavDropdown.Item>
            <NavDropdown.Item href="/">Настройки</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logoutHandler} href="/">
              Выйти
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
      <div style={{ height: '30px' }} />
    </>
  );
}
