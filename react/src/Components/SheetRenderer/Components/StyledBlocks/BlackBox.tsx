import React from "react"

interface Props {
  label?: string;
  subLabel?: string;
  flexBasis: string;
}

const BlackBox: React.FC<Props> = ({label, subLabel, flexBasis}) => {

  return <div className="bg-black-alpha-90 text-white flex flex-column mb-2 mr-1" style={{flexBasis}}>
    <span className="font-bold text-xs">{label}</span>
    <span className="text-xs">{subLabel}</span>
  </div>
}

export default BlackBox;