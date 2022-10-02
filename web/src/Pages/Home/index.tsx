/* eslint-disable react/function-component-definition */
import React, { useEffect } from "react";
import { MenuItem } from "primereact/menuitem";
import { useAppDispatch } from "App/Hooks";
import { setMenu } from "Features/speedDialSlice";
import { setShowCreateGameSidePanel } from "Features/gameSlice";
import Localize from "Components/Localize/Index";
import Boards from "./Components/Boards";


const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {       
    
    const menu: Array<MenuItem> = [{
      label: Localize.CreateNewGame,
      command: () => dispatch(setShowCreateGameSidePanel(true))
    }]

    dispatch(setMenu(menu));
  })
  
  return <div>
    <Boards />
  </div>
}

export default Home;