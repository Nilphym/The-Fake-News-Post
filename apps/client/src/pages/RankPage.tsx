import { useEffect, useState } from 'react';
import { NewsContent } from '../components/News/NewsContent/NewsContent';
import { NewsHeader } from '../components/News/NewsHeader/NewsHeader';
import { webSocketService } from '../services/webSocketService';
import { turnNicknameToCrossWord } from '../utils/turnNicknameToCrossword';
import styles from './RankPage.module.scss';

export const RankPage = () => {
  const [rank, setRank] = useState<{ name: string; score: number }[]>([]);

  useEffect(() => {
    webSocketService.rank(setRank);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <NewsHeader>HighScores</NewsHeader>
        <NewsContent>
          There's top 10 of our participants. Are you on a list?
          Congratulations!
        </NewsContent>
      </div>
      {rank.map(({ name }, index) => {
        return (
          <div key={index} className={styles.crosswordContainer}>
            <div className={styles.crosswordComponent}>
              <div className={styles.crosswordIndex}>{index + 1}</div>
              {turnNicknameToCrossWord(name).map((e, index) => {
                return <div key={index}>{e}</div>;
              })}
            </div>
          </div>
        );
      })}

      <div className={styles.scoreContainer}>
        <div>
          {rank.map(({ score }, index) => {
            return (
              <div key={index}>
                {index + 1}. Score: {score}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
