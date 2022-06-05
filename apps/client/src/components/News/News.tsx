import 'react-loading-skeleton/dist/skeleton.css';

import { NewsContent } from './NewsContent';
import { NewsHeader } from './NewsHeader';
import { NewsImage } from './NewsImage';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ChooseAnswerArgs } from '../../pages/GamePage';
import styles from './News.module.scss';

export const News = ({
  title,
  content,
  image,
  chooseAnswer,
  style,
  skeleton,
  type,
}: {
  title?: string;
  content?: string;
  image?: string;
  chooseAnswer?: ({ userAnswer }: ChooseAnswerArgs) => void;
  style?: any;
  skeleton?: boolean;
  type?: 'host';
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
      {type ? null : (
        <div className={styles.answerContainer}>
          <button
            onClick={() => chooseAnswer!({ userAnswer: 'FAKE' })}
            className={`${styles.answerButton} ${styles['answerButton--wrong']}`}
          >
            Fake
          </button>
          <button
            onClick={() => chooseAnswer!({ userAnswer: 'REAL' })}
            className={`${styles.answerButton} ${styles['answerButton--right']}`}
          >
            Real
          </button>
        </div>
      )}
      <NewsHeader>{title!}</NewsHeader>
      <NewsContent>
        {content!.length > 1000 ? `${content!.slice(0, 1000)} [...]` : content}
      </NewsContent>
      <NewsImage image={image!} />
    </div>
  );
};
