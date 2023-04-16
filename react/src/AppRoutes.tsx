
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { hasAuthParams, useAuth } from 'react-oidc-context';
import { Toast } from 'primereact/toast';
import { Sidebar } from 'primereact/sidebar';
import { SpeedDial } from 'primereact/speeddial';
import { MenuItem } from 'primereact/menuitem';

// Elements
import { useAppDispatch, useAppSelector } from 'App/Hooks';
import { setShowCreateGameSidePanel } from 'Features/gameSlice';
import { dismissToast } from 'Features/notificationSlice';
import Header from 'Components/Header';
import CreateGame from 'Components/CreateGame';


// Pages
import Home from 'Pages/Home';
import Admin from 'Pages/Admin';
import BoardCategories from 'Pages/Admin/Components/BoardCategories';
import Game from 'Pages/Game';
import Characters from 'Pages/Game/Components/Characters';
import GameConfiguration from 'Pages/Game/Components/Configuration';

const AppRoutes: React.FC = () => {
  const dispatch = useAppDispatch();
  const { activeNavigator, isLoading: authenticationLoading, error: authenticationError, isAuthenticated, signinRedirect } = useAuth();
  const [menu, setMenu] = useState<Array<MenuItem>>([]);
  const { showCreateGameSidePanel } = useAppSelector(state => state.game);
  const { detail, isOpen, position, severity, summary } = useAppSelector(state => state.notification);
  const toast = useRef<Toast>(null);
  
  useEffect(() => {
    if (!hasAuthParams() &&!isAuthenticated && !activeNavigator && !authenticationLoading) {
      signinRedirect();
    }
  }, [isAuthenticated, activeNavigator, authenticationLoading, signinRedirect]);


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

  return <BrowserRouter>
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
    <SpeedDial model={menu} direction="up" style={{ left: 'calc(95%)', bottom: 'calc(2%)' }} visible={menu.length > 0} />
  </BrowserRouter>      
}

export default AppRoutes;