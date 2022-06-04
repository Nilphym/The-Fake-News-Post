import { Routes, Route } from 'react-router-dom';
import { HowToPlay } from './components/HowToPlay/HowToPlay';
import { Layout } from './Layout';
import { NewsPage } from './pages/NewsPage';

export const App = () => {
  return (
    // <Routes>
    //   <Route path='/' element={<Layout />}>
    //     <Route index element={<div>Home Page</div>} />
    //     <Route
    //       path='game'
    //       element={
    //         <div style={{ margin: '0 auto', width: '40rem' }}>
    //           <NewsPage />
    //         </div>
    //       }
    //     />
    //     <Route path='summary' element={<div>Podsumowanie rozgrywki</div>} />
    //     <Route path='ranking' element={<div>Ranking</div>} />
    //   </Route>
    <HowToPlay />
    // </Routes>
  );
};
