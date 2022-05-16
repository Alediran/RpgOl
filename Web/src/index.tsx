import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './App/Store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from 'react-oidc-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider authority='https://localhost:44384' client_id='RpgOl_App' redirect_uri='http://localhost:4200' scope='RpgOl openid role' post_logout_redirect_uri='http://localhost:4200'>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
