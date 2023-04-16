/* eslint-disable react/function-component-definition */
import React from "react";
import { SheetRendererComponentProps } from "..";

const Image: React.FC<SheetRendererComponentProps> = ({component}) => {
  const { id, label, key, options, values} = component;

  return <div>Image placeholder</div>
}

export default Image;