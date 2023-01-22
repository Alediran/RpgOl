/* eslint-disable react/function-component-definition */
import React, { useEffect } from "react";
import { useNavigate, useParams, useOutlet } from "react-router-dom";
import { MenuItem } from "primereact/menuitem";
import { PrimeIcons } from "primereact/api";

import { useAppDispatch } from "App/Hooks";
import useIsGameMaster from "App/useIsGameMaster";
import { setMenu } from "Features/speedDialSlice";
import ErrorHandling from "Components/ErrorHandling";
import Localize from "Components/Localize/Index";
import { useGetBoardByIdQuery } from "Services/Boards";
import Threads from "./Components/Threads";

const Game: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const outlet = useOutlet();  
  const { id } = useParams();
  const { data: board, isLoading: boardLoading, isError: boardError, error } = useGetBoardByIdQuery(id);
  const [isGameMaster] = useIsGameMaster();
  
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
      
      dispatch(setMenu(isGameMaster() ? menu.concat(masterMenu) : menu));
    }
  });

  if (boardLoading) return <div>Loading</div>

  if (boardError && 'status' in error) return <ErrorHandling error={error} />

  return <div>     
    {outlet || <Threads id={id} title={board?.name}/>}
  </div>
}

export default Game;