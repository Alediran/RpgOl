/* eslint-disable react/function-component-definition */
import React from "react";
import { useParams } from "react-router-dom";
import ErrorHandling from "Components/ErrorHandling";
import { useGetBoardByIdQuery } from "Services/Boards";
import Threads from "./Components/Threads";

const Game: React.FC = () => {
  const {id} = useParams();
  const {data: board, isLoading: boardLoading, isError: boardError, error} = useGetBoardByIdQuery(id);
   

  if (boardLoading) return <div>Loading</div>

  if (boardError && 'status' in error) return <ErrorHandling error={error} />

  return <div>     
    <Threads id={id} title={board?.name}/>
  </div>
}

export default Game;