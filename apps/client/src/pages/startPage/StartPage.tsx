import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import styles from './StartPage.module.scss';

export const StartPage = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const goToHostGame = () => {
    navigate('/host');
  };

  return (
    <div style={{ paddingTop: '2rem' }}>
      <Row>
        <Col xs={'12'} sm={'6'} className={styles['StartPage-column']}>
          <button onClick={goToHostGame} className={styles['StartPage-button']}>
            Host game
          </button>
        </Col>
        <Col xs={'12'} sm={'6'} className={styles['StartPage-column']}>
          <Form
            noValidate
            validated={validated}
            className={styles['StartPage-form']}
            onSubmit={handleSubmit}
          >
            <Form.Group>
              <Form.Control
                type='text'
                required
                placeholder='Code'
                className={styles['StartPage-formInput']}
              />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid code.
              </Form.Control.Feedback>
            </Form.Group>
            <button type='submit' className={styles['StartPage-button']}>
              Join
            </button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
