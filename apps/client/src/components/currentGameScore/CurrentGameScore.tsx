import { ProgressBar } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GameState } from '../../redux/gameSlice';
import { gameService } from '../../services/gameService';
import scorePlaceholder from '../../assets/images/scorePlaceholder.jpg';

import styles from './CurrentGameScore.module.scss';

export const CurrentGameScore = (): JSX.Element => {
  const game: GameState = useSelector((state: any) => state.game);
  const totalTime = game.answers
    .map((value) => value.elapsedTime)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  const timePerQuestion = 60 * 5;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(() =>
        gameService.calculateElapsedTime({ startTime: game.questionStartTime }),
      );
    }, 1000);
    return () => {
      clearInterval(interval);
      setCounter(0);
    };
  }, [game.currentQuestion]);

  return (
    <div className={'mt-5'}>
      {game.news.length > 0 ? (
        <div>
          <h3 className={'text-center'}>CURRENT GAME</h3>
          <div>
            <p>Total time: {totalTime + counter}s</p>
          </div>
          <div>Time left: {timePerQuestion - counter}s</div>
          <ProgressBar
            now={((timePerQuestion - counter) / timePerQuestion) * 100}
          ></ProgressBar>
          <div>Progress</div>
          <ProgressBar
            now={((game.currentQuestion + 1) / game.news.length) * 100}
          ></ProgressBar>
        </div>
      ) : (
        <div>
          <img
            className={'d-block image ' + styles['Score-img']}
            src={scorePlaceholder}
            alt={'score'}
          />
        </div>
      )}
    </div>
  );
};
