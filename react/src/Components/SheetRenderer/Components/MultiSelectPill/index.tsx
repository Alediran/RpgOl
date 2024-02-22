/* eslint-disable react/function-component-definition */
import React from "react";
import { Badge } from 'primereact/badge';
import { Chip } from 'primereact/chip';
import { MultiSelect } from "primereact/multiselect";
import { InputNumber } from 'primereact/inputnumber';
import { GameSystem } from "Types/Enums";
import { StructureLookupClassValue } from "Types/Sheet";
import { useAppDispatch, useAppSelector } from "App/Hooks";
import { updateAttribute } from "Features/characterSlice";
import { SheetRendererComponentProps } from "..";
import styles from './index.module.scss';

const MultiSelectPill: React.FC<SheetRendererComponentProps> = ({component, system}) => {
  const { id, label, key, settings, options} = component;
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.character.attributes[key]);
  
  
  const updateClassLevel = (itemId: string, level: number | null) => {
    const result = (value as Array<StructureLookupClassValue>).map((item) => item.id === itemId ? {
      ...item,
      level: level ?? 1
    } : item);

    dispatch(updateAttribute({key, value: result})) 
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

  const currentValue = () => value ? (value as Array<StructureLookupClassValue>).map((item) => item.id) : [];

  const onChange = () => {
    // dispatch(updateAttribute({key, value: e.target.value}))
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