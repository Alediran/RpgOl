/* eslint-disable react/function-component-definition */
import { useAppSelector } from "App/Hooks";
import Localize from "Components/Localize/Index";
import { Skeleton } from "primereact/skeleton";
import React from "react";
import { useGetAllBoardsQuery } from "Services/Boards";
import { BoardTypes } from "Types/Enums";
import Row from "./Row";

const Boards: React.FC = () => {
  const {data: boards, isLoading: loadingBoards} = useGetAllBoardsQuery()
  const { userId } = useAppSelector(state => state.session);

  return <div className='flex'>
    <div className="col-6">
      <div className="header">
        <b>{Localize.GamesYouOwn}</b>
      </div>
      <div className="container"> 
        {loadingBoards ? <Skeleton width="100%" /> : boards?.filter(q => q.creatorId === userId && q.type === BoardTypes.Game).map((board) => <Row id={board.id} name={board.name} />)}
      </div>
      <div className="header">
        <b>{Localize.GamesYouPlay}</b>
      </div>
      <div className={loadingBoards ? '': 'container' }> 
        {loadingBoards ? <Skeleton width="100%" /> : boards?.filter(q => q.creatorId !== userId && q.type === BoardTypes.Game).map((board) => <Row id={board.id} name={board.name} />)}
      </div>
    </div>
    <div className="col-6">
      <div className="header">
        <b>{Localize.GeneralBoards}</b>
      </div>
      <div className="container">
        {loadingBoards ? <Skeleton width="100%" /> : boards?.filter(q => q.type === BoardTypes.General).map((board) => <Row id={board.id} name={board.name} />)}
      </div>
    </div>
  </div>
}

export default Boards;