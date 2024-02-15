import React from 'react';
import { AuthProvider } from 'react-oidc-context';
import { User } from "oidc-client-ts";
import { useAppDispatch } from 'App/Hooks';
import { SessionTokenDto } from 'Types/Authentication';
import { setToken } from 'Features/sessionSlice';
import AppRoutes from 'AppRoutes';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova/theme.css';
import 'primeflex/primeflex.css';
import './App.scss';

function App() {
  const dispatch = useAppDispatch();  

  const onSigninCallback = (_user: User | void): void => {
    window.history.replaceState(
      {},
      document.title,
      window.location.pathname
    )
  
    const sessionToken: SessionTokenDto = {
      access_token: (_user as User).access_token,
      expires_at: (_user as User).expires_at,
      id_token: (_user as User).id_token,
      scope: (_user as User).scope,
      session_state: (_user as User).session_state,
      token_type: (_user as User).token_type,
      expired: (_user as User).expired,
      expires_in: (_user as User).expires_in
    }

    dispatch(setToken(sessionToken));
  }

  return (
    <AuthProvider 
      authority={import.meta.env.VITE_AUTHORITY} 
      client_id={import.meta.env.VITE_CLIENT_ID}       
      redirect_uri={import.meta.env.VITE_REDIRECT_URL}
      post_logout_redirect_uri={import.meta.env.VITE_REDIRECT_URL}
      automaticSilentRenew={true}
      scope='RpgOl' 
      onSigninCallback={onSigninCallback}
    >
      <div className="App"> 
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}

export default App;