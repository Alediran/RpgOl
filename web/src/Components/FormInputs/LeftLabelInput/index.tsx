/* eslint-disable react/function-component-definition */
import React from "react";
import styles from "./index.module.css";

interface LeftLabelInputProps {
  name: string;
  label: string;
  children: React.ReactNode;
}

const LeftLabelInput: React.FC<LeftLabelInputProps> = ({name, label, children }) => 
  <div className="field grid">
    <label htmlFor={name} className={`col-fixed ${styles.leftLabel}`}>{label}</label>
    <div className="col">
      { children }
    </div>
  </div>

export default LeftLabelInput;