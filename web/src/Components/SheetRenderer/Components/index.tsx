/* eslint-disable react/function-component-definition */
import React from "react";
import { GameSystem } from "Types/Enums";
import { CharacterAtribute, StructureComponent, StructureComponentType } from "Types/Sheet";
import Region from "./Region";
import TextInput from "./TextInput";

export interface SheetRendererComponentProps {
  component: StructureComponent;
  attribute?: CharacterAtribute;
  system: GameSystem;
}

const SheetRendererComponent: React.FC<SheetRendererComponentProps> = ({component, attribute, system}) => {

  switch (component.type) {
    case StructureComponentType.Region:
      return <Region component={component} attribute={attribute} system={system} />
    case StructureComponentType.TextInput:
      return <TextInput component={component} attribute={attribute} system={system} />
    default:
      return <span />
  }
}

export default SheetRendererComponent;