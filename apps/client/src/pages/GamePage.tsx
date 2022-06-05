import { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { News } from '../components/News';
import { answer, getNews, goToNextAnswer } from '../redux/gameSlice';
import { PossibleAnswer } from '../services/gameService';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export type ChooseAnswerArgs = { userAnswer: PossibleAnswer };

export const GamePage = () => {
  const dispatch = useDispatch();
  const { news, currentQuestion } = useSelector((state) => (state as any).game);
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    dispatch(getNews() as any).then(() => setInProp(true));
  }, []);

  const chooseAnswer = ({ userAnswer }: ChooseAnswerArgs) => {
    setInProp(false);
    dispatch(answer({ id: news[currentQuestion].id, answer: userAnswer }));
  };

  const nextAnswer = () => {
    dispatch(goToNextAnswer());
    setInProp(true);
  };

  return news.length ? (
    currentQuestion < news.length ? (
      <Transition in={inProp} timeout={duration} onExited={nextAnswer}>
        {(state) => (
          <News
            style={{
              ...defaultStyle,
              ...(transitionStyles as any)[state],
            }}
            title={news[currentQuestion].title}
            content={news[currentQuestion].content}
            image={news[currentQuestion].image}
            chooseAnswer={chooseAnswer}
          />
        )}
      </Transition>
    ) : (
      <Navigate to='/summary' />
    )
  ) : (
    <News skeleton={true} />
  );
};
