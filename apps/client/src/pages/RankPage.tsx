import { useSelector } from 'react-redux';
import { NewsContent } from '../components/News/NewsContent/NewsContent';
import { NewsHeader } from '../components/News/NewsHeader/NewsHeader';
import { turnNicknameToCrossWord } from '../utils/turnNicknameToCrossword';
import styles from './RankPage.module.scss';

export const RankPage = () => {
  const { ranking: rank }: any = useSelector(
    (state) => (state as any).webSocket,
  );

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <NewsHeader>HighScores</NewsHeader>
        <NewsContent>
          There's top 10 of our participants. Are you on a list?
          Congratulations!
        </NewsContent>
      </div>
      {rank.slice(0, 10).map(({ name }: { name: any }, index: any) => {
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
          {rank.slice(0, 10).map(({ score }: { score: any }, index: any) => {
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
