import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';
import { useAppDispatch } from 'App/Hooks';

// Elements
import { Header } from 'Components/Header';

// Style
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova/theme.css';
import './App.css';
import { setUser } from 'Features/sessionSlice';

function App() {
  const {activeNavigator, isLoading: authenticationLoading, error: authenticationError, isAuthenticated, user} = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) dispatch(setUser(user.profile.sub))
  }, [isAuthenticated])

  switch (activeNavigator) {
    case "signinSilent":
      return <div>Signing you in...</div>;
    case "signoutRedirect":
      return <div>Signing you out...</div>;
  }

  if (authenticationLoading) {
    return <div>Loading...</div>;
  }

  if (authenticationError) {
    return <div>Oops... {authenticationError.message}</div>;
  }  

  return (
    <div className="App">      
      <BrowserRouter>
        <Routes>      
          <Route path='/' element={<Header />}>
          </Route>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
