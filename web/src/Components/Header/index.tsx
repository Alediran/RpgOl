/* eslint-disable react/function-component-definition */
import React, { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Menu } from 'primereact/menu';
import { MenuItem } from "primereact/menuitem";
import { useAuth } from "react-oidc-context";
import { Button } from "primereact/button";
import { PrimeIcons } from 'primereact/api';
import { useLazyGetUserDetailsQuery } from "Services/User";
import { useAppDispatch, useAppSelector } from "App/Hooks";
import Localize from "Components/Localize/Index";
import { setShowCreateGameSidePanel } from "Features/gameSlice";


const Header: React.FC = () => {
  const { isAuthenticated, signinRedirect, signoutRedirect } = useAuth();
  const [ getUserDetails ] = useLazyGetUserDetailsQuery();
  const { userId } = useAppSelector(state => state.session);
  const menuRef = useRef<Menu>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (userId) getUserDetails(userId)
  }, [getUserDetails, userId])

  const menu: Array<MenuItem> = [
    {
      label: Localize["Menu:Home"],
      command: () => navigate('/')
    },
    {
      label: Localize.CreateNewGame,
      command: () => dispatch(setShowCreateGameSidePanel(true))
    }
  ]

  const userMenu: Array<MenuItem> = [
    { 
      label: Localize.Profile,      
    },
    {
      separator: true
    },
    {
      label: Localize["Menu:Logout"],
      command: () => signoutRedirect()
    }
  ]

  return <Menubar model={menu} 
    end={isAuthenticated ? 
      <>
        <Menu model={userMenu} popup ref={menuRef} />
        <Button label={Localize["Menu:User"]} icon={PrimeIcons.USER} className="p-button-text" onClick={(event) => {if (menuRef.current) menuRef.current.toggle(event)}}/>
      </> 
    : <Button onClick={() => signinRedirect()}>{Localize.Login}</Button>}/>
}

export default Header;