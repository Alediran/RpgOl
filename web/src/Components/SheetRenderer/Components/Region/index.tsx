/* eslint-disable react/function-component-definition */
import React from "react";
import { StructureComponentDirection, StructureComponentSize } from "Types/Sheet";
import SheetRendererComponent, { SheetRendererComponentProps } from "..";
import styles from './index.module.scss';

const Region: React.FC<SheetRendererComponentProps> = ({component, attribute, system}) => {
  const {label, options, children} = component;

  const regionClass = (direction?: StructureComponentDirection, size?: StructureComponentSize) => {
    let result = options.direction === 'horizontal' ? 'grid' : 'block';

    if (size) result += ` col-${size}`;    

    return result;
  }  

  const renderChildren = () => children?.map((child) => <SheetRendererComponent component={child} system={system}/>);

  return <div className={regionClass(options.direction, options.size)} style={{border: '1px solid'}}>
    {label && <div className={`p-1 ${options.verticalLabel ? styles.verticalLabel : ''}`}>{label}</div>}
    {options.direction === 'horizontal' && renderChildren()}
    {options.direction === 'vertical' && <div>
      {renderChildren()}
    </div>}
  </div>
}

export default Region;