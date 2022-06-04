import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RankPage } from './pages/RankPage';
import { GamePage } from './pages/GamePage';
import { GameLobby } from './components/GameLobby/GameLobby';
import { StartPage } from './pages/startPage/StartPage';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<StartPage />} />
        <Route path='game' element={<GamePage />} />
        <Route path='host' element={<GameLobby />} />
        <Route path='summary' element={<div>Podsumowanie rozgrywki</div>} />
        <Route path='ranking' element={<RankPage />} />
      </Route>
    </Routes>
  );
};
