import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';
import store from 'App/Store';
import App from 'App';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/nano/theme.css';
import './index.scss';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </PrimeReactProvider>
  </React.StrictMode>,
)
