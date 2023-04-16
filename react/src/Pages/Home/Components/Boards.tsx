/* eslint-disable react/function-component-definition */
import React from "react";
import { useAuth } from "react-oidc-context";
import { Skeleton } from "primereact/skeleton";
import { useGetAllBoardsQuery } from "Services/Boards";
import { BoardTypes } from "Types/Enums";
import Localize from "Components/Localize/Index";
import BoardRow from "./BoardRow";

const Boards: React.FC = () => {
  const { user } = useAuth();  
  const {data: boards, isLoading: loadingBoards} = useGetAllBoardsQuery();
  

  return <div className='flex'>
    <div className="col-6">
      <div className="header">
        <b>{Localize.GamesYouOwn}</b>
      </div>
      <div className="container"> 
        {loadingBoards ? <Skeleton width="100%" /> : boards?.filter(q => q.creatorId === user?.profile.sub && q.type === BoardTypes.Game).map((board) => <BoardRow key={board.id} id={board.id} name={board.name} />)}
      </div>
      <div className="header">
        <b>{Localize.GamesYouPlay}</b>
      </div>
      <div className={loadingBoards ? '': 'container' }> 
        {loadingBoards ? <Skeleton width="100%" /> : boards?.filter(q => q.creatorId !== user?.profile.sub && q.type === BoardTypes.Game).map((board) => <BoardRow key={board.id} id={board.id} name={board.name} />)}
      </div>
    </div>
    <div className="col-6">
      <div className="header">
        <b>{Localize.GeneralBoards}</b>
      </div>
      <div className="container">
        {loadingBoards ? <Skeleton width="100%" /> : boards?.filter(q => q.type === BoardTypes.General).map((board) => <BoardRow key={board.id} id={board.id} name={board.name} />)}
      </div>
    </div>
  </div>
}

export default Boards;