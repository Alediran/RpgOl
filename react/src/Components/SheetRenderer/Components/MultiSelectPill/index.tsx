/* eslint-disable react/function-component-definition */
import React, { useContext } from "react";
import { Badge } from 'primereact/badge';
import { Chip } from 'primereact/chip';
import { MultiSelect } from "primereact/multiselect";
import { InputNumber } from 'primereact/inputnumber';
import { GameSystem } from "Types/Enums";
import { StructureLookupClassValue } from "Types/Sheet";
import { SheetContext } from "Components/SheetRenderer";
import { SheetRendererComponentProps } from "..";
import styles from './index.module.scss';

const MultiSelectPill: React.FC<SheetRendererComponentProps> = ({component, system}) => {
  const { id, label, key, settings, options} = component;
  const context = useContext(SheetContext);
  const value = context.value?.[component.key] as Array<StructureLookupClassValue>;
    
  const updateClassLevel = (itemId: string, level: number | null) => {
    const result = (value as Array<StructureLookupClassValue>).map((item) => item.id === itemId ? {
      ...item,
      level: level ?? 1
    } : item);

    console.log("Result ", result);
    if (context.onChange) context.onChange(component.key, result)
  }

  const itemTemplate = (itemId: string, itemLabel: string, itemValue: number, maxValue: number) => <div>{itemLabel} 
    <InputNumber value={itemValue} showButtons min={1} max={maxValue} style={{width: '50px' }}
      onClick={(e) => {
        e.stopPropagation();
      }} 
      onChange={(e) => updateClassLevel(itemId, e.value)}
    />
  </div>

  const pillTemplate = (option?: StructureLookupClassValue) =>  {
    
    if (option && option) {
      const optionLabel = options?.find(q => (q.value as StructureLookupClassValue).id === option.id)?.label;

      return <Chip template={<><span className="pr-2">{optionLabel}</span> <Badge value={option.level} /></>} removable />
    }

    return <div />
  }

  return <div className={`flex align-items-end col-${settings.size ?? '4'}`}>
    <label htmlFor={id} className={`pr-1 ${settings.boldLabel ? 'font-bold' : ''} `}>{label}</label>
    <MultiSelect id={id} key={key} options={options} 
      className={`w-full ${styles[GameSystem[system]]}`} value={value} 
      onChange={(e) => { 
        e.stopPropagation();        
      }}
      itemTemplate={(e) => itemTemplate(e.value.id, e.label, e.value.level, e.value.maxLevel)}
      selectedItemTemplate={pillTemplate}
    />
  </div>
}


export default MultiSelectPill;