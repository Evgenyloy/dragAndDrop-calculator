import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import store from './store/store';
import { Provider } from 'react-redux';
import './style/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
