import { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { News } from '../components/News';
import { NewsType, PossibleAnswer } from '../services/gameService';
import { webSocketService } from '../services/webSocketService';
import { saveRanking } from '../redux/webSocketSlice';

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
  const [currentAnswer, setCurrentAnswer] = useState<string | null>(null);
  const [toggleAnswer, setToggleAnswer] = useState(false);
  const [inProp, setInProp] = useState(false);
  const { pin, user } = useSelector((state) => (state as any).webSocket);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    webSocketService.checkQuestion((question: NewsType) => {
      setCurrentQuestion(question);
      setInProp(true);
      setToggleAnswer(false);
    });
    webSocketService.checkCorrectAnswer((answer: string) => {
      setCurrentAnswer(answer);
      setInProp(false);
      setToggleAnswer(true);
    });
    webSocketService.rank((res: any) => {
      dispatch(saveRanking(res));
      navigate('/summary');
    });
    if (type === 'host') {
      webSocketService.startQuestion(pin);
    }
  }, []);

  const chooseAnswer = ({ userAnswer }: ChooseAnswerArgs) => {
    setInProp(false);
    webSocketService.sendAnswer(pin, user, userAnswer);
  };

  const showAnswer = () => {
    webSocketService.stopQuestion(pin);
  };

  const setNextAnswer = () => {
    webSocketService.startQuestion(pin);
  };

  return currentQuestion && inProp ? (
    <div
      style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}
    >
      {type && (
        <button
          onClick={showAnswer}
          style={{
            backgroundColor: 'transparent',
            padding: '1rem 0',
            margin: '0 2rem',
            fontSize: '1.8rem',
          }}
        >
          Show answer
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
    <div
      style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}
    >
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
          Next news
        </button>
      )}
      {toggleAnswer ? (
        <div style={{ padding: '1rem 2rem' }}>The news was {currentAnswer}</div>
      ) : null}
      <News skeleton={true} />
    </div>
  );
};
