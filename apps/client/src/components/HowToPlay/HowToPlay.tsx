import React from 'react';
import styles from './HowToPlay.module.scss';
export const HowToPlay = () => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.header}>How to play?</h2>
      <div className={styles.instrucrtionDescription}>
        The game is pretty simple! You have to find if the article is fake or
        real, but you've got to be quick because you've got only 3 minutes for
        all your guesses. Ejnoy!
      </div>
    </div>
  );
};
