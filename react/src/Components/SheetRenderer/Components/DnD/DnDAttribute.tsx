import React, { useContext } from "react";
import { PrimeIcons } from "primereact/api";
import { InputNumber } from "primereact/inputnumber";
import { StructureComponent } from "Types/Sheet";
import { SheetContext } from "Components/SheetRenderer";

interface Props {
  component: StructureComponent;
}

const DnDAttribute: React.FC<Props> = ({component}) => {
  const context = useContext(SheetContext);
  const value = context.value?.[component.key] as number
  const tempValue = context.value?.[`Temp${component.key}`] as number;

  console.log("Context and component ", context, component);

  const handleChange = (value: number | null) => {
    if (context.onChange) context.onChange(component.key, value)
  }

  return <div className="flex">
    <div className="bg-black text-white">
      {component.label} <i className={PrimeIcons.AMAZON} />
    </div>
    <div>
      <InputNumber min={component.settings.minValue} showButtons value={value} onChange={e => handleChange(e.value)} />
    </div>
    <div>
      {Math.floor((value -10) / 2)}
    </div>
    <div>
      <InputNumber value={tempValue} />
    </div>
    <div>
    {Math.floor((value + tempValue -10) / 2)}
    </div>
  </div>
}

export default DnDAttribute;