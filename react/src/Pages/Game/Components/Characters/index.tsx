/* eslint-disable react/function-component-definition */
import SheetRenderer from "Components/SheetRenderer";
import React from "react";
import { mockSheet } from "Types/Sheet";

const Characters: React.FC = () => <SheetRenderer sheet={mockSheet} />

export default Characters;