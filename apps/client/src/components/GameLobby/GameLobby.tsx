import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { savePin } from '../../redux/webSocketSlice';
import { webSocketService } from '../../services/webSocketService';
import styles from './GameLobby.module.scss';

export const GameLobby = () => {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { connected, pin } = useSelector((state) => (state as any).webSocket);

  useEffect(() => {
    if (connected) {
      webSocketService.createGame(({ id }: { id: string }) => {
        dispatch(savePin(id));
      });
      webSocketService.checkUserJoined(({ user }: { user: string }) =>
        setPlayers((prev) => [...prev, user] as any),
      );
    }

    return () => {
      webSocketService.removeListeners();
    };
  }, [connected]);

  const startGame = () => {
    webSocketService.startGame(pin);
    navigate('/game/host');
  };

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.joinText}>
        Join at:{' '}
        {pin ? (
          pin
        ) : (
          <Skeleton
            inline={true}
            width='8rem'
            baseColor='#f0ebdf'
            highlightColor='#000'
          />
        )}
      </h2>
      {pin ? <QRCode value={`${window.location.origin}?code=${pin}`} /> : null}
      <button
        disabled={!players.length}
        onClick={startGame}
        className={styles.joinButton}
      >
        Start
      </button>
      <p className={styles.playersHeading}>Players:</p>
      <ul className={styles.playersList}>
        {players.map((playerName) => (
          <li key={playerName} className={styles.singlePlayer}>
            {playerName}
          </li>
        ))}
      </ul>
    </div>
  );
};
