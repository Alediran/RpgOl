import { GameSystem } from "./Enums";


// Character Sheets Structure types
export enum StructureComponentType {
  Region,
  TextInput,
  NumberInput,
  CheckInput,
  Calculated,
}

export type StructureComponentSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export type StructureComponentDirection = 'horizontal' | 'vertical';

export interface SheetBase {
  id: string;
  system: GameSystem;
  structure: Array<StructureComponent>;
}

export interface StructureComponentOptions {
  direction?: StructureComponentDirection;
  verticalLabel?: boolean;
  size?: StructureComponentSize;
  boldLabel?: boolean;
}

export interface StructureComponent {
  id: string;
  key: string;
  label?: string;
  
  type: StructureComponentType;
  options: StructureComponentOptions;
  children?: Array<StructureComponent>;
}

export const mockSheet: SheetBase = {
  id: 'id',
  system: GameSystem.DungeonsAndDragons,
  structure: [{
    id: 'id-1',
    key: 'header',
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
        type: StructureComponentType.TextInput,
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


// Character Sheets attribute types
export interface CharacterAtribute {
  id: string;
  key: string;
  value: string | number
}

