import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RankPage } from './pages/RankPage';
import { GamePage } from './pages/GamePage';
import { GameLobby } from './components/GameLobby/GameLobby';
import { StartPage } from './pages/startPage/StartPage';
import { connect } from './redux/webSocketSlice';
import { webSocketService } from './services/webSocketService';

export const App = () => {
  const dispatch = useDispatch();
  const { connected } = useSelector((state) => (state as any).webSocket);

  useEffect(() => {
    webSocketService.connect(() => dispatch(connect()));
  }, []);

  return connected ? (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<StartPage />} />
        <Route path='host' element={<GameLobby />} />
        <Route path='game' element={<GamePage />} />
        <Route path='game/:type' element={<GamePage />} />
        <Route path='summary' element={<RankPage />} />
      </Route>
    </Routes>
  ) : null;
};
