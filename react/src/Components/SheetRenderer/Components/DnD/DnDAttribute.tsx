import React, { useContext } from "react";
import { InputNumber } from "primereact/inputnumber";
import { SheetContext } from "Components/SheetRenderer";
import { SheetRendererComponentProps } from "..";
import BlackBox from "../StyledBlocks/BlackBox";

const DnDAttribute: React.FC<SheetRendererComponentProps> = ({component}) => {
  const context = useContext(SheetContext);
  const value = context.value?.[component.key] as number
  const tempValue = context.value?.[`Temp${component.key}`] as number;

  const handleChange = (property: string, value: number | null) => {
    if (context.onChange) context.onChange(property, value)
  }

  return <>
    <BlackBox label={component.label} subLabel={component.subLabel} flexBasis='19%' />
    <div className="mb-2 mr-1"  style={{flexBasis: '19%'}}>
      <InputNumber min={component.settings.minValue} value={value} onChange={e => handleChange(component.key, e.value)} 
      inputClassName="w-full text-center vertical-align-middle" className="h-full"
        showButtons incrementButtonClassName="p-button-secondary w-1rem h-1rem" decrementButtonClassName="p-button-secondary w-1rem h-1rem"
      />
    </div>
    <div className="border-1 mb-2 mr-1"  style={{flexBasis: '19%'}}>
      <span className="w-full h-full">{Math.floor((value -10) / 2)}</span>
    </div>
    <div className="mb-2 mr-1"  style={{flexBasis: '19%'}}>
      <InputNumber className="h-full" inputClassName="w-full text-center" value={tempValue} onChange={e => handleChange(`Temp${component.key}`, e.value)}  />
    </div>
    <div className="border-1 mb-2"  style={{flexBasis: '19%'}}>
      <span className="w-full h-full">{tempValue > 0 && Math.floor((value + tempValue -10) / 2)}</span>
    </div>
  </>
}

export default DnDAttribute;