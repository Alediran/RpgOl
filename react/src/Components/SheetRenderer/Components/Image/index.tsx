/* eslint-disable react/function-component-definition */
import React from "react";
import { SheetRendererComponentSystemicProps } from "..";

const Image: React.FC<SheetRendererComponentSystemicProps> = ({component}) => {
  const { id, label, key, settings, options} = component;

  return <div>Image placeholder</div>
}

export default Image;