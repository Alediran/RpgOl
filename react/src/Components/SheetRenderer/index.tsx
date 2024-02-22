/* eslint-disable react/function-component-definition */
import React, { createContext, useState } from "react";
import { Dictionary } from "@reduxjs/toolkit";
import { GameSystem } from "Types/Enums";
import { SheetBase } from "Types/Sheet";
import SheetRendererComponent from "./Components";

interface Props {
  sheet: SheetBase;
  value?: Dictionary<unknown>;
}

interface SheetRendererContext {
  value?: Dictionary<unknown>;
  onChange?: (property: string, value: unknown) => void;
}


export const SheetContext = createContext<SheetRendererContext>({});

const SheetRenderer: React.FC<Props> = ({sheet, value}) => {
  const {system, structure} = sheet;
  const [currentValue, setCurrentValue] = useState(value);
  
  const handleChange = (property: string, value: unknown) => {
    const newValue = {...currentValue};
    newValue[property] = value;

    setCurrentValue(newValue);
  }


  return <div>
    <div>{GameSystem[system]}</div>
    <SheetContext.Provider value={{value: currentValue, onChange: handleChange}}>
      {structure.map((component) => <SheetRendererComponent key={component.key} component={component} system={system} />)}
    </SheetContext.Provider>
    
  </div>
}

export default SheetRenderer;