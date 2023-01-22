/* eslint-disable react/function-component-definition */
import React from "react";
import { GameSystem } from "Types/Enums";
import { CharacterAtribute, SheetBase } from "Types/Sheet";
import SheetRendererComponent from "./Components";

interface Props {
  sheet: SheetBase;
  attributes?: Array<CharacterAtribute>;
}

const SheetRenderer: React.FC<Props> = ({sheet, attributes}) => {
  const {system, structure} = sheet;

  return <div>
    <div>{GameSystem[system]}</div>
    {structure.map((component) => <SheetRendererComponent key={component.key} component={component} system={system} />)}
  </div>
}

export default SheetRenderer;