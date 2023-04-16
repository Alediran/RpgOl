/* eslint-disable react/function-component-definition */
import React, { useEffect } from "react";
import { useNavigate, useParams, useOutlet } from "react-router-dom";
import { MenuItem } from "primereact/menuitem";
import { PrimeIcons } from "primereact/api";

import useIsGameMaster from "App/useIsGameMaster";
import ErrorHandling from "Components/ErrorHandling";
import Localize from "Components/Localize/Index";
import { useGetBoardByIdQuery } from "Services/Boards";
import Threads from "./Components/Threads";
import useSpeedDial from "App/useSpeedDial";

const Game: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const outlet = useOutlet();  
  const [isGameMaster] = useIsGameMaster();
  const {setMenu} = useSpeedDial();
  const { data: board, isLoading: boardLoading, isError: boardError, error } = useGetBoardByIdQuery(id);
  
  useEffect(() => {
    if (!boardLoading) {
      const masterMenu: Array<MenuItem> = [
        {
          label: Localize.GameMaster,
          items: [
            { label: Localize.Configuration, icon: PrimeIcons.COG, command: () => navigate('configuration') },
            { label: 'Placeholder 1'},
            { label: 'Placeholder 2'}
          ]
        }
      ]

      const menu: Array<MenuItem> = [
        {label: Localize.Characters, command: () => navigate('characters')},
      ]
      
      setMenu(isGameMaster() ? menu.concat(masterMenu) : menu);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  if (boardLoading) return <div>Loading</div>

  if (boardError && 'status' in error) return <ErrorHandling error={error} />

  return <div>     
    {outlet || <Threads id={id} title={board?.name}/>}
  </div>
}

export default Game;