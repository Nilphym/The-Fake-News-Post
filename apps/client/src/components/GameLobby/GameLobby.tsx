import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { webSocketService } from '../../services/webSocketService';
import styles from './GameLobby.module.scss';

export const GameLobby = () => {
  const players: Array<string> = ['Dawid', 'Marek', 'Pawel', 'Darek', 'Gosia'];
  const addPlayerToArray = (name: string) => players.push(name);

  useEffect(() => {
    webSocketService.connect();
  }, []);

  const startGame = () => {
    console.log('start game');
  };

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.joinText}>
        Join at:{' '}
        <Skeleton
          inline={true}
          width='8rem'
          baseColor='#f0ebdf'
          highlightColor='#000'
        />
      </h2>
      <button onClick={startGame} className={styles.joinButton}>
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
