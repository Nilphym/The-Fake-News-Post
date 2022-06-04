import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { MainNews } from '../components/News/MainNews';
import { answer, getNews } from '../redux/gameSlice';
import { PossibleAnswer } from '../services/gameService';

export type ChooseAnswerArgs = { userAnswer: PossibleAnswer };

export const NewsPage = () => {
  const dispatch = useDispatch();
  const { news, currentQuestion } = useSelector((state) => (state as any).game);

  useEffect(() => {
    dispatch(getNews() as any);
  }, []);

  const chooseAnswer = ({ userAnswer }: ChooseAnswerArgs) => {
    dispatch(answer({ id: news[currentQuestion].id, answer: userAnswer }));
  };

  return news.length ? (
    currentQuestion < news.length ? (
      <MainNews
        title={news[currentQuestion].title}
        content={news[currentQuestion].content}
        image={news[currentQuestion].image}
        chooseAnswer={chooseAnswer}
      />
    ) : (
      <Navigate to='/summary' />
    )
  ) : (
    <p>Spinner?</p>
  );
};
