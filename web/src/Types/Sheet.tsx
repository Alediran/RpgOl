import { GameSystem } from "./Enums";
import LookupDto from "./Output/LookupDto";


const alignments: Array<LookupDto> = [
  {
    value: 'LG',
    label: "Lawful Good"
  },
  {
    value: 'NG',
    label: "Neutral Good"
  },
  {
    value: 'CG',
    label: "Chaotic Good"
  },
  {
    value: 'LN',
    label: "Lawful Neutral"
  },
  {
    value: 'TN',
    label: "True Neutral"
  },
  {
    value: 'CN',
    label: "Chaotic Neutral"
  },
  {
    value: 'LE',
    label: "Lawful Evil"
  },
  {
    value: 'NE',
    label: "Neutral Evil"
  },
  {
    value: 'CE',
    label: "Chaotic Evil"
  }
]



// Character Sheets Structure types
export enum StructureComponentType {
  Region,
  TextInput,
  NumberInput,
  CheckInput,
  Calculated,
  DropDown,
}

export type StructureComponentSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export type StructureComponentDirection = 'horizontal' | 'vertical';
export type StructureLabelPosition = 'top' | 'left' | 'right' | 'bottom';

export interface SheetBase {
  id: string;
  system: GameSystem;
  structure: Array<StructureComponent>;
}

export interface StructureComponentOptions {
  direction?: StructureComponentDirection;
  verticalLabel?: boolean;
  labelPosition?: StructureLabelPosition;
  size?: StructureComponentSize;
  boldLabel?: boolean;
}

export interface StructureComponent {
  id: string;
  key: string;
  label?: string;
  
  type: StructureComponentType;
  options: StructureComponentOptions;
  values?: Array<LookupDto>;
  children?: Array<StructureComponent>;
}

export const mockSheet: SheetBase = {
  id: 'id',
  system: GameSystem.DungeonsAndDragons,
  structure: [{
    id: 'id-1',
    key: 'header',
    label: 'Header',
    type: StructureComponentType.Region,
    options: {
      direction: 'horizontal',
      size: '6'
    },
    children: [
      {
        id: 'id-2',
        key: 'name',
        label: 'Name',
        type: StructureComponentType.TextInput,
        options: {
          boldLabel: true,
          size: '12'
        },
      },
      {
        id: 'id-3',
        key: 'race',
        label: 'Race',
        type: StructureComponentType.TextInput,
        options: {}
      },
      {
        id: 'id-4' ,
        key: 'alignment',
        label: 'Alignment',
        type: StructureComponentType.DropDown,
        values: alignments,
        options: { size: '2'}
      },
      {
        id: 'id-5',
        key: 'description',
        label: 'Description',
        type: StructureComponentType.TextInput,
        options: { 
          size: '12'
        }
      }
    ]
  }]
}
