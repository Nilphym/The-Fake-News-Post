import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { Authors } from './components/authors/Authors';
import { Header } from './components/Header/Header';
import { HowToPlay } from './components/HowToPlay/HowToPlay';

export const Layout = () => {
  return (
    // <div>
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row sm={{cols: 2}} md={{cols: 4}}>
        <Col sm={{span: 6, order: 2}} md={{span: 3, order: 1}}>
          <HowToPlay />
        </Col>
        <Col sm={{span: 12, order: 1}} md={{span: 6, order: 2}}>
          <Outlet />
        </Col>
        <Col sm={{span: 6, order: 3}} md={{span: 3, order: 3}}>
          <Authors />
        </Col>
      </Row>
    </Container>
    //   <div>Nawigacja</div>
    //   <div>
    //     <div>Instrukcja / Lewy panel</div>
    //     <Outlet />
    //     <div>Autorzy + Rozgrywka / Prawy panel</div>
    //   </div>
    // </div>
  );
};
