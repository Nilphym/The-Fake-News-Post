import { ProgressBar } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export const CurrentGameScore = (): JSX.Element => {
  const game = true;
  const time = 0;
  const timePerQuestion = 60000;
  const questions = [];
  const questionIndex = 0;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {game ? (
        <div>
          <h2>CURRENT GAME</h2>
          <div>
            <h3>Total time</h3>
            <p>Time: {time}</p>
          </div>
          <div>Time left</div>
          <ProgressBar
            now={timePerQuestion - counter / timePerQuestion}
          ></ProgressBar>
          <div>Progress</div>
          <ProgressBar
            now={(questionIndex + 1) / questions.length}
          ></ProgressBar>
          <div>
            <button>Next</button>
          </div>
        </div>
      ) : (
        <div>placeholder</div>
      )}
    </>
  );
};
