import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Navigation from './ui/Navigation';

export default function Layout() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <main>
            <Outlet />
          </main>
        </Col>
      </Row>
    </Container>
  );
}
