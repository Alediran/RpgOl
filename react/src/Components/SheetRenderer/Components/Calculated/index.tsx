/* eslint-disable react/function-component-definition */
import React from "react";
import { useAppSelector } from "App/Hooks";
import { InputText } from "primereact/inputtext";
import { GameSystem } from "Types/Enums";
import { SheetRendererComponentSystemicProps } from "..";
import styles from './index.module.scss';

const Calculated: React.FC<SheetRendererComponentSystemicProps> = ({component, system}) => {
  const { id, label, key, settings} = component;
  
  const values = useAppSelector((state) => state.character.attributes);

  
  return <div className={`flex align-items-end col-${settings.size ?? '4'}`}>
    <span className={`pr-1 ${settings.boldLabel ? 'font-bold' : ''} `}>{label}</span>
    <InputText id={id} key={key} readOnly className={`w-full ${styles[GameSystem[system]]}`}/>
  </div>
}

export default Calculated;