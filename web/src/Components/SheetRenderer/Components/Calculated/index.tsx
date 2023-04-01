/* eslint-disable react/function-component-definition */
import { useAppSelector } from "App/Hooks";
import { InputText } from "primereact/inputtext";
import React from "react";
import { GameSystem } from "Types/Enums";
import { SheetRendererComponentProps } from "..";
import styles from './index.module.scss';

const Calculated: React.FC<SheetRendererComponentProps> = ({component, system}) => {
  const { id, label, key, options} = component;
  
  const values = useAppSelector((state) => state.character.attributes);

  
  return <div className={`flex align-items-end col-${options.size ?? '4'}`}>
    <span className={`pr-1 ${options.boldLabel ? 'font-bold' : ''} `}>{label}</span>
    <InputText id={id} key={key} readOnly className={`w-full ${styles[GameSystem[system]]}`}/>
  </div>
}

export default Calculated;