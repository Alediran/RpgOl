/* eslint-disable react/function-component-definition */
import React, { useEffect } from "react";
import { MenuItem } from "primereact/menuitem";
import { useAppDispatch } from "App/Hooks";
import { setShowCreateGameSidePanel } from "Features/gameSlice";
import Localize from "Components/Localize/Index";
import Boards from "./Components/Boards";
import { PrimeIcons } from "primereact/api";
import ISpeedMenu from "Interfaces/ISpeedMenu";

interface Props extends ISpeedMenu {
  
}

const Home: React.FC<Props> = ({onSetMenu}) => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {       
    
    const menu: Array<MenuItem> = [{
      icon: PrimeIcons.PLUS_CIRCLE,
      label: Localize.CreateNewGame,
      command: () => dispatch(setShowCreateGameSidePanel(true))
    }]
    
    onSetMenu(menu);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return <div>
    <Boards />
  </div>
}

export default Home;