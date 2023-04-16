import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth, hasAuthParams } from 'react-oidc-context';

// Elements
import { Toast } from 'primereact/toast';
import { Sidebar } from 'primereact/sidebar';
import { SpeedDial } from 'primereact/speeddial';
import Header from 'Components/Header';
import CreateGame from 'Components/CreateGame';
import { SessionTokenDto } from 'Types/Authentication';

// Events
import { useAppDispatch, useAppSelector } from 'App/Hooks';
import { dismissToast } from 'src/Features/notificationSlice';
import { setShowCreateGameSidePanel } from 'Features/gameSlice';

// Pages
import Home from 'Pages/Home';
import Admin from 'Pages/Admin';
import BoardCategories from 'src/Pages/Admin/Components/BoardCategories';
import Game from 'Pages/Game';
import Characters from 'Pages/Game/Components/Characters';
import GameConfiguration from 'Pages/Game/Components/Configuration';

// Style
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova/theme.css';
import 'primeflex/primeflex.css';
import './App.scss';
import { setToken } from 'Features/sessionSlice';
import { MenuItem } from 'primereact/menuitem';


function App() {
  const { activeNavigator, isLoading: authenticationLoading, error: authenticationError, isAuthenticated, user, signinRedirect } = useAuth();
  const { detail, isOpen, position, severity, summary } = useAppSelector(state => state.notification);
  const { showCreateGameSidePanel } = useAppSelector(state => state.game);
  const [menu, setMenu] = useState<Array<MenuItem>>([]);
  const dispatch = useAppDispatch();
  
  
  const toast = useRef<Toast>(null);

  useEffect(() => {
    if (!hasAuthParams() &&
        !isAuthenticated && !activeNavigator && !authenticationLoading) {
        signinRedirect();
    }
  }, [isAuthenticated, activeNavigator, authenticationLoading, signinRedirect]);

  useEffect(() => {
    if (user) {
      dispatch(setToken({access_token: user.access_token, token_type:user.token_type}));
    }
  },[user, dispatch])

  useEffect(() => {
    if (isAuthenticated && user) {
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

      dispatch(setToken(sessionToken));
    }
  }, [isAuthenticated, user, dispatch])

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
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home onSetMenu={setMenu}/>} />            
          <Route path="admin" element={<Admin />} >
            <Route path="categories" element={<BoardCategories />} />
          </Route>
          <Route path='game/:id' element={<Game onSetMenu={setMenu} />}>
            <Route path='characters' element={<Characters />} />
            <Route path='configuration' element={<GameConfiguration />} />
          </Route>          
        </Routes>
        <Sidebar visible={showCreateGameSidePanel} position="right" onHide={() => dispatch(setShowCreateGameSidePanel(false))}>
          <CreateGame />
        </Sidebar>         
        <Toast ref={toast} onHide={() => dispatch(dismissToast())} position={position} />
        <SpeedDial model={menu} direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
      </BrowserRouter>      
    </div>
  );
}

export default App;
