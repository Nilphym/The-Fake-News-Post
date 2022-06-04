import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { Authors } from './components/authors/Authors';
import { Header } from './components/Header/Header';
import { HowToPlay } from './components/HowToPlay/HowToPlay';
import styles from './Layout.module.scss';
import { CurrentGameScore } from './components/currentGameScore/CurrentGameScore';

export const Layout = () => {
  return (
    <Container fluid style={{ padding: '2rem' }}>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col xs={{ span: 6, order: 2 }} md={{ span: 3, order: 1 }}>
          <HowToPlay />
        </Col>
        <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
          <div className={styles.verticalBorder}>
            <Outlet />
          </div>
        </Col>
        <Col xs={{ span: 6, order: 3 }} md={{ span: 3, order: 3 }}>
          <Row>
            <CurrentGameScore />
          </Row>
          <Row>
            <Authors />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
