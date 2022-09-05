/* eslint-disable react/function-component-definition */
import Localize from "Components/Localize/Index";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import React, { useRef } from "react";

interface ActionMenuProps {
  items: Array<MenuItem>;
}
const ActionMenu: React.FC<ActionMenuProps> = ({items}) => {
  const menu = useRef<Menu>(null);

  return (
    <div>
      <Menu model={items} popup ref={menu} id="popup_menu" />
      <Button label={Localize.Show} icon="pi pi-bars" onClick={(event) => menu.current && menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup />
    </div>
  )
}

export default ActionMenu;