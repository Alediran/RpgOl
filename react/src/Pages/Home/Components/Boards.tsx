/* eslint-disable react/function-component-definition */
import React from "react";
import { Skeleton } from "primereact/skeleton";
import { useGetAllBoardsQuery } from "Services/Boards";
import Localize from "Components/Localize/Index";
import BoardRow from "./BoardRow";

const Boards: React.FC = () => {
  const {data: boards, isLoading: loadingBoards} = useGetAllBoardsQuery();
    
  return <div className='flex'>
    <div className="col-6">
      <div className="header">
        <b>{Localize.GamesYouOwn}</b>
      </div>
      <div className="container"> 
        {loadingBoards ? <Skeleton width="100%" /> : boards?.ownerBoards.map((board) => <BoardRow key={board.id} id={board.id} name={board.name} />)}
      </div>
      <div className="header">
        <b>{Localize.GamesYouPlay}</b>
      </div>
      <div className={loadingBoards ? '': 'container' }> 
        {loadingBoards ? <Skeleton width="100%" /> : boards?.followedBoards.map((board) => <BoardRow key={board.id} id={board.id} name={board.name} />)}
      </div>
    </div>
    <div className="col-6">
      <div className="header">
        <b>{Localize.GeneralBoards}</b>
      </div>
      <div className="container">
        {loadingBoards ? <Skeleton width="100%" /> : boards?.generalBoards.map((board) => <BoardRow key={board.id} id={board.id} name={board.name} />)}
      </div>
    </div>
  </div>
}

export default Boards;