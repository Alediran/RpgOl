/* eslint-disable react/function-component-definition */
import React from "react";
import { StructureComponentDirection, StructureComponentSize, StructureLabelPosition } from "Types/Sheet";
import SheetRendererComponent, { SheetRendererComponentProps } from "..";
import styles from './index.module.scss';

const Region: React.FC<SheetRendererComponentProps> = ({component, attribute, system}) => {
  const {label, options, children} = component;

  const regionClass = (direction?: StructureComponentDirection, size?: StructureComponentSize, labelPosition?: StructureLabelPosition) => {
    let result = '';
    
    
    if (direction === 'horizontal') result = 'grid' 
    
    if (direction === 'vertical') result = 'block';

    
    
    if (options.labelPosition === 'left') result += ' flex';
    if (options.labelPosition === 'right') result += ' flex flex-row-reverse justify-content-end';
    if (options.labelPosition === 'bottom') result += ' flex flex-column-reverse';

    if (size) result += ` col-${size}`;    

    return result;
  }  

  const labelClass = (verticalLabel?: boolean, bold?: boolean) => {
    let result = 'p-1';

    if (verticalLabel) result += ` ${styles.verticalLabel}`;

    if (bold) result += ' font-bold';

    return result;
  }

  const subContainerClass = (labelPosition?: StructureLabelPosition) => {
    let result = '';

    if (labelPosition === 'left' || labelPosition === 'right') result = 'col-11';

    return result;
  }

  const renderChildren = () => children?.map((child) => <SheetRendererComponent component={child} system={system}/>);

  return <div className={regionClass(options.direction, options.size, options.labelPosition)} style={{border: '1px solid'}}>
    {label && <div className={labelClass(options.verticalLabel, options.boldLabel)} style={{background: 'orange'}}>
      {label}
    </div>}
    {options.direction === 'horizontal' && renderChildren()}
    {options.direction === 'vertical' && <div className={subContainerClass(options.labelPosition)}>
      {renderChildren()}
    </div>}
  </div>
}

export default Region;