/* eslint-disable react/function-component-definition */
import SheetRenderer from "Components/SheetRenderer";
import React from "react";
import { mockSheet } from "Types/Sheet";

const sheetValues = {
    "Strength": 10,
    "TempStrength": 0,
    "Dexterity": 10,
    "TempDexterity": 0,
    "Constitution": 10,
    "TempConstitution": 0,
    "Intelligence": 10,
    "TempIntelligence": 0,
    "Wisdom": 10,
    "TempWisdom": 0,
    "Charisma": 10,
    "TempCharisma": 0,
    "Race": "MoonElf",
    "Class": [{
      "Name": "Fighter",
      "Level": 1
    },
    {
      "Name": "Rogue",
      "Level": 1        
    }]
  }

const Characters: React.FC = () => <SheetRenderer sheet={mockSheet} value={sheetValues} />

export default Characters;