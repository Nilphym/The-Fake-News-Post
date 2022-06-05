import React from 'react';
import styles from './crossword.module.scss';

export const turnNicknameToCrossWord = (nickname: string) => {
  nickname = nickname.toUpperCase();
  const letters = [];
  for (let i = 0; i < 10; i++) {
    if (nickname[i]) {
      letters.push(<div className={styles.singleItem}>{nickname[i]}</div>);
    } else {
      letters.push(<div className={styles.singleItem}></div>);
    }
  }
  return letters;
};
