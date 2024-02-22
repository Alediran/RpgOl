/* eslint-disable react/function-component-definition */
import React from "react";
import { Dropdown } from "primereact/dropdown";
import { useAppDispatch, useAppSelector } from "App/Hooks";
import { updateAttribute } from "Features/characterSlice";
import { GameSystem } from "Types/Enums";
import { SheetRendererComponentProps } from "..";
import styles from './index.module.scss';

const DropDown: React.FC<SheetRendererComponentProps> = ({component, system}) => {
  const { id, label, key, settings, options} = component;
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.character.attributes[key]);

  return <div className={`flex align-items-end col-${settings.size ?? '4'} ${styles.leftAlign}`}>
    <label htmlFor={id} className={`pr-1 ${settings.boldLabel ? 'font-bold' : ''} `}>{label}</label>
    <Dropdown id={id} key={key} className={`w-full ${styles[GameSystem[system]]}`} options={options} value={value ?? ''} onChange={(e) => dispatch(updateAttribute({key, value: e.target.value}))} />     
  </div>
}

export default DropDown;