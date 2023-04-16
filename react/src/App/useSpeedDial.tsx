import { useState } from "react";
import { MenuItem } from "primereact/menuitem";


function useSpeedDial() {
  const [model, setModel] = useState<Array<MenuItem>>([]);
  const [visible, setVisible] = useState(false);

  const cleanMenu = () => {
    setModel([]);
  }

  const setMenu = (menu: Array<MenuItem>) => {
    setModel(menu)
  }

  return {
    model,
    visible,
    setVisible,
    setMenu,
    cleanMenu
  }
}

export default useSpeedDial;