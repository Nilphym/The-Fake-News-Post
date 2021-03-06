import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import { Authors } from './components/authors';
import { Header } from './components/Header';
import { HowToPlay } from './components/HowToPlay';
import { CurrentGameScore } from './components/currentGameScore/CurrentGameScore';
import Untitled from './assets/images/Untitled.png';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <Container style={{ padding: '2rem 2rem 0' }} fluid>
      <Row style={{ padding: '0 0 2rem' }}>
        <Header />
      </Row>
      <Row>
        <Col xs={{ span: 6, order: 2 }} md={{ span: 3, order: 1 }}>
          <HowToPlay />
          <div style={{ width: '100%', display: 'flex' }}>
            <img
              src={Untitled}
              alt=''
              style={{ margin: '0 auto', paddingTop: '2rem', width: '70%' }}
            />
          </div>
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
