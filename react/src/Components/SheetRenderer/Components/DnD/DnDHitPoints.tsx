import React, { useContext } from "react";
import { SheetContext } from "Components/SheetRenderer";
import { SheetRendererComponentProps } from "..";
import BlackBox from "../StyledBlocks/BlackBox";
import { InputNumber } from "primereact/inputnumber";
import Localize from "Components/Localize/Index";

interface HitPoints {
  total: number;
  current: number;
  nonlethal: number;
  dr: number;
}

const DnDHitPoints: React.FC<SheetRendererComponentProps> = ({component}) => {
  const context = useContext(SheetContext);
  const value = context.value?.[component.key] as HitPoints;

  const handleChange = (property: string, val: string | number | null) => {

    const newValue = {
      ...value,       
      [property]: val
    }

    if (context.onChange) context.onChange(property, newValue)
  }

  return <>
    <div className="flex w-full h-4rem">
      <BlackBox label={component.label} subLabel={component.subLabel} flexBasis='19%' />
      <div className="mb-2 mr-1"  style={{flexBasis: '19%'}}>
        <InputNumber className="h-full" inputClassName="w-full text-center" value={value.total} onChange={e => handleChange(`total`, e.value)}  />
      </div>
      <div className="border-1 mb-2"  style={{flexBasis: '19%'}}>
        <span className="w-full h-full">{value.dr}</span>
      </div>
    </div>
    <div className="flex w-full h-8rem">
      <div className="flex flex-column h-full">
        <label htmlFor="current">{Localize.WoundsCurrentHp}</label>
        <InputNumber id="current" value={value.current} onChange={e => handleChange(`current`, e.value)} className="h-full" />
      </div>
    </div>
    <div className="flex w-full h-3rem">
      <div className="flex flex-column">
        <label htmlFor="current">{Localize.WoundsCurrentHp}</label>
        <InputNumber id="current" value={value.current} onChange={e => handleChange(`current`, e.value)} className="h-full" />
      </div>
    </div>
  </>
}

export default DnDHitPoints;