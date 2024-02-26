/* eslint-disable react/function-component-definition */
import { InputNumber } from "primereact/inputnumber";
import React from "react";
import { GameSystem } from "Types/Enums";
import { StructureComponent, StructureComponentType } from "Types/Sheet";
import Calculated from "./Calculated";
import DnDAttribute from "./DnD/DnDAttribute";
import DnDHitPoints from "./DnD/DnDHitPoints";
import DnDInitiative from "./DnD/DnDInitiative";
import DropDown from "./DropDown";
import Grid from "./Grid";
import Image from "./Image";
import MultiSelectPill from "./MultiSelectPill";
import Region from "./Region";
import TextInput from "./TextInput";

export interface SheetRendererComponentProps {
  component: StructureComponent;
} 

export interface SheetRendererComponentSystemicProps extends SheetRendererComponentProps{
  component: StructureComponent;
  system: GameSystem;
}

const SheetRendererComponent: React.FC<SheetRendererComponentSystemicProps> = ({component, system}) => {

  switch (component.type) {
    case StructureComponentType.Region:
      return <Region component={component} system={system} />
    case StructureComponentType.Grid:
      return <Grid component={component} system={system} />
    case StructureComponentType.TextInput:
      return <TextInput component={component} system={system} />
    case StructureComponentType.DropDown:
      return <DropDown component={component} system={system} />
    case StructureComponentType.Image:
      return <Image component={component} system={system} />
    case StructureComponentType.NumberInput:
      return <InputNumber id={component.id} key={component.key} min={component.settings.minValue} showButtons />
    case StructureComponentType.Calculated:
      return <Calculated component={component} system={system} />
    case StructureComponentType.MultiSelectPill:
      return <MultiSelectPill component={component} system={system} />

    //D&D 3e / Pathfinder 1e specific components
    case StructureComponentType.DnDAttribute:
      return <DnDAttribute component={component} />
    case StructureComponentType.DnDHitPoints:
      return <DnDHitPoints component={component} />
    case StructureComponentType.DnDInitiative:
      return <DnDInitiative component={component} />
    default:
      return <span />
  }
}

export default SheetRendererComponent;