/* eslint-disable react/function-component-definition */
import React from "react";
import { useAppSelector } from "App/Hooks";
import { SpeedDial } from "primereact/speeddial";
import { Tooltip } from "primereact/tooltip";
import styles from './index.module.scss';

interface Props {

}

const FloatingMenu: React.FC<Props> = () => {
  const { model, visible } = useAppSelector(state => state.speedDial);  

  return (
    <div hidden={model === undefined} style={{position: 'relative'}}>
      <div style={{position: 'absolute', right: '100px', bottom: '120px'}}>
        <SpeedDial className="speeddial-main" model={model} visible={visible} direction='up' buttonClassName={styles["button-size"]} style={{zIndex: '1'}}  />
        <Tooltip target=".speeddial-main .p-speeddial-action" position="left" /> 
      </div>
    </div>)
}

export default FloatingMenu;