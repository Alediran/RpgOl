import React, { useContext } from "react";
import { SheetContext } from "Components/SheetRenderer";
import { SheetRendererComponentProps } from "..";

interface HitPoints {
  total: number;
  current: number;
  nonlethal: number;
  dr: number;
}

const DnDHitPoints: React.FC<SheetRendererComponentProps> = ({component}) => {
  const context = useContext(SheetContext);
  const value = context.value?.[component.key] as HitPoints;



  return <div></div>
}

export default DnDHitPoints;