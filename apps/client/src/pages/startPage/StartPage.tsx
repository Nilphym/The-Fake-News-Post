import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { webSocketService } from '../../services/webSocketService';
import styles from './StartPage.module.scss';
import { savePin, saveUser } from '../../redux/webSocketSlice';
import { useDispatch } from 'react-redux';

export const StartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<{ pin: string; name: string }>();

  const onSubmit = ({ pin, name }: { pin: string; name: string }) => {
    webSocketService.joinGame({ pin, user: name });
    dispatch(saveUser(name));
    dispatch(savePin(pin));
    navigate('/game');
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
            onSubmit={handleSubmit(onSubmit)}
            className={styles['StartPage-form']}
          >
            <Form.Group
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <Form.Control
                {...register('pin', { required: true })}
                type='text'
                placeholder='Code'
                className={styles['StartPage-formInput']}
              />
              <Form.Control
                {...register('name', { required: true, maxLength: 10 })}
                type='text'
                maxLength={10}
                placeholder='Name'
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
