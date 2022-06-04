import React from 'react';
import { Outlet } from 'react-router-dom';
import { CurrentGameScore } from './components/currentGameScore/CurrentGameScore';
import { Authors } from './components/authors/Authors';
import { Col, Container, Row } from 'react-bootstrap';

export const Layout = () => {
  return (
    <div>
      <Row>Nawigacja</Row>
      <Container>
        <Row>
          <Col md='3' sm='12'>
            Instrukcja / Lewy panel
          </Col>
          <Col md='6' sm='12'>
            <Outlet />
          </Col>
          <Col md='3' sm='12'>
            <Row>
              <Authors />
            </Row>
            <Row>
              <CurrentGameScore />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
