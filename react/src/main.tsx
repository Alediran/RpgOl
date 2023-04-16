import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from 'react-oidc-context'
import { User } from "oidc-client-ts";
import { Provider } from 'react-redux'
import store from 'App/Store';
import App from 'App'
import './index.scss'

const onSigninCallback = (_user: User | void): void => {
  window.history.replaceState(
    {},
    document.title,
    window.location.pathname
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider 
      authority={import.meta.env.VITE_AUTHORITY} 
      client_id={import.meta.env.VITE_CLIENT_ID} 
      redirect_uri={import.meta.env.VITE_REDIRECT_URL} 
      automaticSilentRenew={true}
      scope='RpgOl' 
      post_logout_redirect_uri={import.meta.env.VITE_REDIRECT_URL}
      onSigninCallback={onSigninCallback}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
)
