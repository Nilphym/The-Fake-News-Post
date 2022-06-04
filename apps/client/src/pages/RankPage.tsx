import React from 'react';
import { NewsContent } from '../components/News/NewsContent';
import { NewsHeader } from '../components/News/NewsHeader';
import { setSecondsToMinutes } from '../utils/setSecondsToMinutes';
import { turnNicknameToCrossWord } from '../utils/turnNicknameToCrossword';
import styles from './RankPage.module.scss';

export const RankPage = () => {
  const data = [
    {
      username: 'Dawid',
      score: 860,
      total_time: 120,
    },
    {
      username: 'Dawid',
      score: 860,
      total_time: 120,
    },
    {
      username: 'Dawid',
      score: 860,
      total_time: 120,
    },
    {
      username: 'Dawid',
      score: 860,
      total_time: 86,
    },
    {
      username: 'Dawid',
      score: 860,
      total_time: 121,
    },
    {
      username: 'Dawid',
      score: 860,
      total_time: 121,
    },
    {
      username: 'Dawid',
      score: 860,
      total_time: 121,
    },
    {
      username: 'Dawid',
      score: 860,
      total_time: 121,
    },
    {
      username: 'Dawid',
      score: 860,
      total_time: 121,
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <NewsHeader>HighScores</NewsHeader>
        <NewsContent>
          There's top 10 of our participants. Are you on a list?
          Congratulations!
        </NewsContent>
      </div>
      {data.map((e, index) => {
        return (
          <div key={index} className={styles.crosswordContainer}>
            <div className={styles.crosswordComponent}>
              <div className={styles.crosswordIndex}>{index + 1}</div>
              {turnNicknameToCrossWord(e.username).map((e, index) => {
                return <div key={index}>{e}</div>;
              })}
            </div>
          </div>
        );
      })}

      <div className={styles.scoreContainer}>
        <div>
          {data.map((e, index) => {
            return (
              <div key={index}>
                {index + 1}. Score: {e.score}, Time:{' '}
                {setSecondsToMinutes(e.total_time)}{' '}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
