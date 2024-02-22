/* eslint-disable react/function-component-definition */
import React from "react";
import { SheetRendererComponentProps } from "..";

const Image: React.FC<SheetRendererComponentProps> = ({component}) => {
  const { id, label, key, settings, options} = component;

  return <div>Image placeholder</div>
}

export default Image;