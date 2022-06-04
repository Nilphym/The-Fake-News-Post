import { ProgressBar } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export const CurrentGameScore = (): JSX.Element => {
  const game = true; // todo from store
  let totalTime = 0; // todo from store
  const timePerQuestion = 60;

  const questions = [1, 2, 3, 4, 5, 6]; // todo from store

  const [counter, setCounter] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      setCounter(0);
    };
  }, [questionIndex]);

  useEffect(() => {
    if (counter >= timePerQuestion) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
      setCounter(0);
    }
  }, [counter]);

  return (
    <>
      {game ? (
        <div>
          <h2>CURRENT GAME</h2>
          <div>
            <h3>Total time</h3>
            <p>Time: {totalTime + counter}s</p>
          </div>
          <div>Time left: {timePerQuestion - counter}s</div>
          <ProgressBar
            now={((timePerQuestion - counter) / timePerQuestion) * 100}
          ></ProgressBar>
          <div>Progress</div>
          <ProgressBar
            now={((questionIndex + 1) / questions.length) * 100}
          ></ProgressBar>
          <div>
            <button
              onClick={() => setQuestionIndex((prevIndex) => prevIndex + 1)}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>placeholder</div>
      )}
    </>
  );
};
