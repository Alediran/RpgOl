/* eslint-disable react/function-component-definition */
import React, { useContext } from "react";
import { InputText } from "primereact/inputtext";
import { GameSystem } from "Types/Enums";
import { SheetRendererComponentProps } from "..";
import styles from './index.module.scss';
import { SheetContext } from "Components/SheetRenderer";

const TextInput: React.FC<SheetRendererComponentProps> = ({component, system}) => {
  const { id, label, key, settings} = component;
  const context = useContext(SheetContext);
  const value = context.value?.[component.key] as string;

  const handleChange = (value: string | null) => {
    if (context.onChange) context.onChange(component.key, value)
  }

  return <div className={`flex align-items-end col-${settings.size ?? '4'} ${styles.leftAlign}`}>
    <label htmlFor={id} className={`pr-1 ${settings.boldLabel ? 'font-bold' : ''} `}>{label}</label>
    <InputText id={id} key={key} className={`w-full ${styles[GameSystem[system]]}`} value={value ?? ''} onChange={(e) => handleChange(e.target.value)} />     
  </div>
}

export default TextInput;