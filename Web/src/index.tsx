import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import store from 'App/Store';
import { Provider } from 'react-redux';
import { AuthProvider } from 'react-oidc-context';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider authority={process.env.REACT_APP_AUTHORITY!} 
      client_id={process.env.REACT_APP_CLIENT_ID!} 
      redirect_uri={process.env.REACT_APP_REDIRECT_URL!} 
      scope='RpgOl openid role' 
      post_logout_redirect_uri={process.env.REACT_APP_REDIRECT_URL!}>
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
