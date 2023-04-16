/* eslint-disable react/function-component-definition */
import React, { useEffect } from "react";
import { MenuItem } from "primereact/menuitem";
import { useAppDispatch } from "App/Hooks";
import useSpeedDial from "App/useSpeedDial";
import { setShowCreateGameSidePanel } from "Features/gameSlice";
import Localize from "Components/Localize/Index";
import Boards from "./Components/Boards";


const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const {setMenu} = useSpeedDial();
  
  useEffect(() => {       
    
    const menu: Array<MenuItem> = [{
      label: Localize.CreateNewGame,
      command: () => dispatch(setShowCreateGameSidePanel(true))
    }]

    console.log(menu)
    setMenu(menu);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return <div>
    <Boards />
  </div>
}

export default Home;