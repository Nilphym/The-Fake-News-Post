import React from 'react';
import { NewsContent } from './NewsContent';
import { NewsHeader } from './NewsHeader';
import { NewsImage } from './NewsImage';
import styles from './MainNews.module.scss';

import { ChooseAnswerArgs } from '../../pages/GamePage';

export const MainNews = ({
  title,
  content,
  image,
  chooseAnswer,
}: {
  title: string;
  content: string;
  image: string;
  chooseAnswer: ({ userAnswer }: ChooseAnswerArgs) => void;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.answerContainer}>
        <button
          onClick={() => chooseAnswer({ userAnswer: 'fake' })}
          className={`${styles.answerButton} ${styles['answerButton--wrong']}`}
        >
          Fake
        </button>
        <button
          onClick={() => chooseAnswer({ userAnswer: 'real' })}
          className={`${styles.answerButton} ${styles['answerButton--right']}`}
        >
          Real
        </button>
      </div>
      <NewsHeader>{title}</NewsHeader>
      <NewsContent>{content}</NewsContent>
      <NewsImage image={image} />
    </div>
  );
};
