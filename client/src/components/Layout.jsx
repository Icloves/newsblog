import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Navigation from './ui/Navigation';
import Footer from './ui/Footer';

export default function Layout({ user, logoutHandler }) {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Navigation user={user} logoutHandler={logoutHandler} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <main>
            <Outlet />
          </main>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
        <Footer />
        </Col>
      </Row>
    </Container>
  );
}
