/* eslint-disable react/function-component-definition */
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  name: string;  
}

const BoardRow: React.FC<Props> = ({id, name}) => <div className="row"><Link to={`/game/${id}`}>{name}</Link></div>

export default BoardRow;