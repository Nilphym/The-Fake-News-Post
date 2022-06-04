import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { RankPage } from './pages/RankPage';
import { GamePage } from './pages/GamePage';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<div>Home Page</div>} />
        <Route path='game' element={<GamePage />} />
        <Route path='summary' element={<div>Podsumowanie rozgrywki</div>} />
        <Route path='ranking' element={<RankPage />} />
      </Route>
    </Routes>
  );
};
