/* eslint-disable react/function-component-definition */
import React from "react";
import { GameSystem } from "Types/Enums";
import { StructureComponent, StructureComponentDirection, StructureComponentSize, StructureLabelPosition } from "Types/Sheet";
import SheetRendererComponent, { SheetRendererComponentProps } from "..";
import styles from './index.module.scss';

const regionClass = (direction: StructureComponentDirection = 'horizontal', size?: StructureComponentSize, labelPosition?: StructureLabelPosition) => {
  let result = '';
    
  if (direction === 'horizontal') result = 'grid' 
  
  if (direction === 'vertical') result = 'block';
  
  
  if (labelPosition === 'left') result += ' flex';
  if (labelPosition === 'right') result += ' flex flex-row-reverse justify-content-end';
  if (labelPosition === 'bottom') result += ' flex flex-column-reverse';

  if (size) result += ` col-${size}`;    

  return result;
}  

const labelClass = (verticalLabel?: boolean, bold?: boolean, direction: StructureComponentDirection = 'horizontal') => {
  let result = 'p-1';

  if (verticalLabel) result += ` ${styles.verticalLabel}`;

  if (!direction || direction === 'horizontal') result += ' col-12';

  if (bold) result += ' font-bold';

  return result;
}

const subContainerClass = (labelPosition?: StructureLabelPosition) => {
  let result = '';

  if (labelPosition === 'left' || labelPosition === 'right') result = 'col-11';

  return result;
}

const renderChildren = (system: GameSystem, children?: Array<StructureComponent>) => children?.map((child) => <SheetRendererComponent key={child.key} component={child} system={system}/>);

const Region: React.FC<SheetRendererComponentProps> = ({component, system}) => {
  const {label, titles, settings, children} = component;

  return <div className={regionClass(settings.direction, settings.size, settings.labelPosition)}>
    {label && <div className={labelClass(settings.verticalLabel, settings.boldLabel, settings.direction)} style={{background: 'orange'}}>
      {label}
    </div>}
    {titles && titles.map(title => <div className="col text-xs uppercase" style={titles ? {flexBasis: `${100 / titles.length}%`} : {}}>{title}</div>)}
    {settings.direction === 'vertical' ? <div className={subContainerClass(settings.labelPosition)}>
      {renderChildren(system, children)}
    </div> : renderChildren(system, children)}    
  </div>
}

export default Region;