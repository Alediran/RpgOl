/* eslint-disable react/function-component-definition */
import { InputText } from "primereact/inputtext";
import React from "react";
import { GameSystem } from "Types/Enums";
import { SheetRendererComponentProps } from "..";
import styles from './index.module.scss';

const TextInput: React.FC<SheetRendererComponentProps> = ({component, attribute, system}) => {
  const { id, label, key, options} = component;

  return <div className={`flex align-items-end col-${options.size ?? '4'} ${styles.leftAlign}`}>
    <label htmlFor={id} className={`pr-1 ${options.boldLabel ? 'font-bold' : ''} `}>{label}</label>
    <InputText id={id} key={key} className={`w-full ${styles[GameSystem[system]]}`} value={attribute?.value} placeholder={label}/>     
  </div>
}

export default TextInput;