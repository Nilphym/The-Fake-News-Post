import React from 'react';
import { NewsContent } from './NewsContent';
import { NewsHeader } from './NewsHeader';
import { NewsImage } from './NewsImage';
import styles from './MainNews.module.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { ChooseAnswerArgs } from '../../pages/GamePage';

export const MainNews = ({
  title,
  content,
  image,
  chooseAnswer,
  style,
  skeleton,
}: {
  title?: string;
  content?: string;
  image?: string;
  chooseAnswer?: ({ userAnswer }: ChooseAnswerArgs) => void;
  style?: Object;
  skeleton?: boolean;
}) => {
  return skeleton ? (
    <div style={style} className={styles.container}>
      <SkeletonTheme baseColor='#f0ebdf' highlightColor='#000'>
        <NewsHeader>
          <Skeleton count={2} />
        </NewsHeader>
        <NewsContent>
          <Skeleton count={5} />
        </NewsContent>
        <Skeleton height='20rem' />
      </SkeletonTheme>
    </div>
  ) : (
    <div style={style} className={styles.container}>
      <div className={styles.answerContainer}>
        <button
          onClick={() => chooseAnswer!({ userAnswer: 'fake' })}
          className={`${styles.answerButton} ${styles['answerButton--wrong']}`}
        >
          Fake
        </button>
        <button
          onClick={() => chooseAnswer!({ userAnswer: 'real' })}
          className={`${styles.answerButton} ${styles['answerButton--right']}`}
        >
          Real
        </button>
      </div>
      <NewsHeader>{title!}</NewsHeader>
      <NewsContent>{content!}</NewsContent>
      <NewsImage image={image!} />
    </div>
  );
};
