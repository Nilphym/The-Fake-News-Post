import { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { News } from '../components/News';
import { NewsType, PossibleAnswer } from '../services/gameService';
import { webSocketService } from '../services/webSocketService';

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
  const { type } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState<NewsType | null>(null);
  const [inProp, setInProp] = useState(false);
  const { pin, user } = useSelector((state) => (state as any).webSocket);

  useEffect(() => {
    webSocketService.checkQuestion((question: NewsType) => {
      setCurrentQuestion(question);
      setInProp(true);
      console.log('first');
    });
    if (type === 'host') {
      webSocketService.startQuestion(pin);
    }
  }, []);

  const chooseAnswer = ({ userAnswer }: ChooseAnswerArgs) => {
    setInProp(false);
    webSocketService.sendAnswer(pin, user, userAnswer);
  };

  const setNextAnswer = () => {
    webSocketService.stopQuestion(pin);
    webSocketService.startQuestion(pin);
  };

  return currentQuestion && inProp ? (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {type && (
        <button
          onClick={setNextAnswer}
          style={{
            backgroundColor: 'transparent',
            padding: '1rem 0',
            margin: '0 2rem',
            fontSize: '1.8rem',
          }}
        >
          Next question
        </button>
      )}
      <Transition in={inProp} timeout={duration}>
        {(state) => (
          <News
            type={type as any}
            style={{
              ...defaultStyle,
              ...(transitionStyles as any)[state],
            }}
            title={currentQuestion.title}
            content={currentQuestion.content}
            image={currentQuestion.image}
            chooseAnswer={chooseAnswer}
          />
        )}
      </Transition>
    </div>
  ) : (
    <News skeleton={true} />
  );
};
