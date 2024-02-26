import { SheetContext } from "Components/SheetRenderer";
import React, { useContext } from "react";
import { SheetRendererComponentProps } from "..";
import BlackBox from "../StyledBlocks/BlackBox";

const DnDInitiative: React.FC<SheetRendererComponentProps> = ({component}) => {
  const context = useContext(SheetContext);
  const value = context.value?.[component.key] as number ?? 0;
  const dexModifier = Math.floor((context.value?.["Dexterity"] + context.value?.["TempDexterity"] - 10) / 2)

  return <div className="flex w-full">
    <BlackBox label={component.label} subLabel={component.subLabel} flexBasis='19%' />
    <div>
      <div className="flex flex-column">
        <div className="border-1 mb-2 mr-1 w-2rem">
          <span className="w-full h-full">{value + dexModifier}</span>      
        </div>
        Total
      </div>
    </div>
    <div className="flex"> = 
      <div className="flex flex-column">
        <div className="border-1 mb-2 mr-1 w-2rem">
          <span className="w-full h-full">{dexModifier}</span>      
        </div>   
        DEX Modifier   
      </div>
    </div>
    <div className="flex"> + 
      <div className="flex flex-column">
        <div className="border-1 mb-2 mr-1 w-2rem">
          <span className="w-full h-full">{value}</span>      
        </div>   
        MISC Modifier   
      </div>
    </div>
  </div>
}

export default DnDInitiative