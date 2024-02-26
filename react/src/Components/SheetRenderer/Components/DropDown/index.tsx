/* eslint-disable react/function-component-definition */
import React, { useContext } from "react";
import { Dropdown } from "primereact/dropdown";
import { GameSystem } from "Types/Enums";
import { SheetRendererComponentSystemicProps } from "..";
import styles from './index.module.scss';
import { SheetContext } from "Components/SheetRenderer";
import LookupDto from "Types/Output/LookupDto";
import { StructureLookupClassValue } from "Types/Sheet";

const DropDown: React.FC<SheetRendererComponentSystemicProps> = ({component, system}) => {
  const { id, label, key, settings, options} = component;
  const context = useContext(SheetContext);
  const value = context.value?.[component.key] as LookupDto<string | number | StructureLookupClassValue>;

  const handleChange = (value: string | null) => {
    if (context.onChange) context.onChange(component.key, value)
  }

  return <div className={`flex align-items-end col-${settings.size ?? '4'} ${styles.leftAlign}`}>
    <label htmlFor={id} className={`pr-1 ${settings.boldLabel ? 'font-bold' : ''} `}>{label}</label>
    <Dropdown id={id} key={key} className={`w-full ${styles[GameSystem[system]]}`} options={options} value={value} onChange={(e) => handleChange(e.target.value)} />     
  </div>
}

export default DropDown;