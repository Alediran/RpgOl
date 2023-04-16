/* eslint-disable react/function-component-definition */
import React from "react";
import { GameSystem } from "Types/Enums";
import { SheetBase } from "Types/Sheet";
import SheetRendererComponent from "./Components";

interface Props {
  sheet: SheetBase;
}

const SheetRenderer: React.FC<Props> = ({sheet}) => {
  const {system, structure} = sheet;

  return <div>
    <div>{GameSystem[system]}</div>
    {structure.map((component) => <SheetRendererComponent key={component.key} component={component} system={system} />)}
  </div>
}

export default SheetRenderer;