/* eslint-disable react/function-component-definition */
import React from "react";
import { Panel } from 'primereact/panel';
import { Skeleton } from "primereact/skeleton";
import { useGetAllBoardsQuery } from "Services/Boards";
import Localize from "Components/Localize/Index";
import BoardRow from "./BoardRow";

const Boards: React.FC = () => {
  const {data: boards, isLoading: loadingBoards} = useGetAllBoardsQuery();
    
  return <div className='col-6'>
    <Panel header={Localize.GamesYouOwn}>
      {loadingBoards ? <Skeleton width="100%" /> : boards?.ownerBoards.map((board) => <BoardRow key={board.id} id={board.id} name={board.name} />)}
    </Panel>
    <Panel header={Localize.GamesYouPlay}>
      {loadingBoards ? <Skeleton width="100%" /> : boards?.followedBoards.map((board) => <BoardRow key={board.id} id={board.id} name={board.name} />)}
    </Panel>
    <Panel header={Localize.GeneralBoards}>
      {loadingBoards ? <Skeleton width="100%" /> : boards?.generalBoards.map((board) => <BoardRow key={board.id} id={board.id} name={board.name} />)}
    </Panel>
  </div>
}

export default Boards;