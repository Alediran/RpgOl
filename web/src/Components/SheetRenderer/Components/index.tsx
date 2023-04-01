/* eslint-disable react/function-component-definition */
import React from "react";
import { GameSystem } from "Types/Enums";
import { StructureComponent, StructureComponentType } from "Types/Sheet";
import Calculated from "./Calculated";
import DropDown from "./DropDown";
import Image from "./Image";
import MultiSelectPill from "./MultiSelectPill";
import Region from "./Region";
import TextInput from "./TextInput";

export interface SheetRendererComponentProps {
  component: StructureComponent;
  system: GameSystem;
}

const SheetRendererComponent: React.FC<SheetRendererComponentProps> = ({component, system}) => {

  switch (component.type) {
    case StructureComponentType.Region:
      return <Region component={component} system={system} />
    case StructureComponentType.TextInput:
      return <TextInput component={component} system={system} />
    case StructureComponentType.DropDown:
      return <DropDown component={component} system={system} />
    case StructureComponentType.Image:
      return <Image component={component} system={system} />
    case StructureComponentType.Calculated:
      return <Calculated component={component} system={system} />
    case StructureComponentType.MultiSelectPill:
      return <MultiSelectPill component={component} system={system} />
    default:
      return <span />
  }
}

export default SheetRendererComponent;