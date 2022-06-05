import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { IoProvider } from 'socket.io-react-hook';

import { App } from './App';
import './index.scss';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <IoProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </IoProvider>,
);
