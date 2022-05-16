import React, { useRef } from "react";
import { Menubar } from 'primereact/menubar';
import { Menu } from 'primereact/menu';
import { MenuItem } from "primereact/menuitem";
import { useAuth } from "react-oidc-context";
import { Button } from "primereact/button";
import { PrimeIcons } from 'primereact/api';
interface HeaderProps {
}

export const Header: React.FC<HeaderProps> = ({}) => {
  const {isAuthenticated, signinRedirect, signoutRedirect } = useAuth();
  const menuRef = useRef<Menu>(null);
  const menu: Array<MenuItem> = []

  const userMenu: Array<MenuItem> = [
    { 
      label: 'Profile',      
    },
    {
      separator: true
    },
    {
      label: 'Log out',
      command: () => signoutRedirect()
    }
  ]

  return <Menubar model={menu} 
    end={isAuthenticated ? 
      <div>
        <Menu model={userMenu} popup ref={menuRef} />
        <Button label="User" icon={PrimeIcons.USER} className="p-button-text" onClick={(event) => {if (menuRef.current) menuRef.current.toggle(event)}}/>
      </div> 
    : <Button onClick={() => signinRedirect()}>Log in</Button>}/>
}