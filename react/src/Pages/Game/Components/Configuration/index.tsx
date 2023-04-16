/* eslint-disable react/function-component-definition */
import useIsGameMaster from "App/useIsGameMaster";
import React from "react";
import { useParams } from "react-router-dom";

const GameConfiguration: React.FC = () => {
  const { id } = useParams();
  const [isGameMaster] = useIsGameMaster();
  
  if (isGameMaster()) return <div>Placeholder Configuration {id}</div>

  return <div>Unauthorized</div>
}

export default GameConfiguration;