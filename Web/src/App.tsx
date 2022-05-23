import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';

// Elements
import { Toast } from 'primereact/toast';
import Header from 'Components/Header';

// Style
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova/theme.css';
import 'primeflex/primeflex.css';
import './App.css';
import { SessionTokenDto } from 'Types/Authentication';

// Pages
import Home from 'Pages/Home';
import Admin from 'Pages/Admin';
import BoardCategories from 'Pages/Admin/Components/BoardCategories';

// Events
import { dismissToast } from 'Features/notificationSlice';
import { useAppDispatch, useAppSelector } from 'App/Hooks';

function App() {
  const {activeNavigator, isLoading: authenticationLoading, error: authenticationError, isAuthenticated, user} = useAuth();
  const toast = useRef<Toast>(null);
  const { detail, isOpen, position, severity, summary} = useAppSelector(state => state.notification);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token-oidc');
    
    if (!token && user) {
      const sessionToken: SessionTokenDto = {
        access_token: user.access_token,
        expires_at: user.expires_at,
        id_token: user.id_token,
        scope: user.scope,
        session_state: user.session_state,
        token_type: user.token_type,
        expired: user.expired,
        expires_in: user.expires_in
      }

      localStorage.setItem('token-oidc', JSON.stringify(sessionToken));
    }
  }, [isAuthenticated, user])

  useEffect(() => {
    if (toast.current) {
      if (isOpen) toast.current.show({severity, summary, detail, life: 3000})
      else toast.current.clear()
    }
  }, [detail, isOpen, severity, summary])


  switch (activeNavigator) {
    case "signinSilent":
      return <div>Signing you in...</div>;
    case "signoutRedirect":
      return <div>Signing you out...</div>;
    default:
      break;
  }

  if (authenticationLoading) {
    return <div>Loading...</div>;
  }

  if (authenticationError) {
    return <div>Oops... {authenticationError.message}</div>;
  }  

  return (
    <div className="App">  
      <Header />    
      <BrowserRouter>
        <Routes>      
          <Route path="/" element={<Home />} />
          <Route path="admin" element={<Admin />} >
            <Route path="categories" element={<BoardCategories />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toast 
        ref={toast} 
        onHide={() => dispatch(dismissToast())} 
        position={position}/>
    </div>
  );
}

export default App;
