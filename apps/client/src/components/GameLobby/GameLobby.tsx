import React from 'react';
import { MainNews } from '../News/MainNews';
import { NewsContent } from '../News/NewsContent';
import { NewsHeader } from '../News/NewsHeader';
import styles from './GameLobby.module.scss';

export const GameLobby = () => {
  const players: Array<string> = ['Dawid', 'Marek', 'Pawel', 'Darek', 'Gosia'];
  const addPlayerToArray = (name: string) => players.push(name);
  return (
    <div className={styles.mainContainer}>
      <h2>Join at: XXX-XXX</h2>
      <div
        className={styles.buttonContainer}
        onClick={() => console.log('kliknieted')}
      >
        <NewsHeader>Start</NewsHeader>
      </div>
      <div className={styles.subHeader}>
        <NewsContent>Players:</NewsContent>
      </div>
      <div className={styles.playersList}>
        {players.map((e, index) => {
          return (
            <span key={index} className={styles.singlePlayer}>
              {e}
            </span>
          );
        })}
      </div>
    </div>
  );
};
