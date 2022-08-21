/* eslint-disable react/function-component-definition */
import { useAppSelector } from "App/Hooks";
import { RootState } from "App/Store";
import Localize from "Components/Localize/Index";
import { Skeleton } from "primereact/skeleton";
import React from "react";
import { useGetAllBoardsQuery } from "Services/Boards";
import { BoardTypes } from "Types/Enums";

const Boards: React.FC = () => {
  const {data: boards, isLoading: loadingBoards} = useGetAllBoardsQuery()
  const { userId } = useAppSelector((state: RootState) => state.session);

  return <div>
    <div>
      <b>{Localize.GamesYouOwn}</b>
    </div>
    {loadingBoards ? <Skeleton width="100%" /> : boards?.filter(q => q.creatorId === userId && q.type === BoardTypes.Game).map((board) => <div>{board.name}</div>)}
    <div>
      <b>{Localize.GamesYouPlay}</b>
    </div>
    {loadingBoards ? <Skeleton width="100%" /> : boards?.filter(q => q.creatorId !== userId && q.type === BoardTypes.Game).map((board) => <div>{board.name}</div>)}
    <div>
      <b>{Localize.GeneralBoards}</b>
    </div>
    {loadingBoards ? <Skeleton width="100%" /> : boards?.filter(q => q.type === BoardTypes.General).map((board) => <div>{board.name}</div>)}
  </div>
}

export default Boards;