import React from 'react';
import { useDispatch } from 'react-redux';
import { NewsContent } from './NewsContent';
import { NewsHeader } from './NewsHeader';
import { NewsImage } from './NewsImage';
import styles from './MainNews.module.scss';

import { answer } from '../../redux/gameSlice';

export const MainNews = ({
  id,
  title,
  content,
  image,
}: {
  id: string;
  title: string;
  content: string;
  image: string;
}) => {
  const dispatch = useDispatch();

  const chooseAnswer = (type: 'fake' | 'real') => {
    dispatch(answer(type));
  };

  return (
    <div className={styles.container}>
      <div className={styles.answerContainer}>
        <button
          onClick={() => chooseAnswer('fake')}
          className={`${styles.answerButton} ${styles['answerButton--wrong']}`}
        >
          Fake
        </button>
        <button
          onClick={() => chooseAnswer('real')}
          className={`${styles.answerButton} ${styles['answerButton--right']}`}
        >
          Real
        </button>
      </div>
      <NewsHeader>
        President John F Kennedy assassinated in the United States
      </NewsHeader>
      <NewsContent>
        Jack Ruby murders John F. Kennedy's suspected assassin Lee Harvey Oswald
        during the transportation of Oswald from Dallas Police Headquaters to
        the Dallas Country Jail on November 24th live on television.
      </NewsContent>
      <NewsImage image={image} />
    </div>
  );
};
