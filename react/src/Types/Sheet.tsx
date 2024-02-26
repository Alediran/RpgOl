import { GameSystem } from "./Enums";
import LookupDto from "./Output/LookupDto";


const alignments: Array<LookupDto<string>> = [
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

const classes: Array<LookupDto<StructureLookupClassValue>> = [
  {
    value: {id: 'barb', level: 0, maxLevel: 20},
    label: 'Barbarian'
  },
  {
    value: {id: 'bard', level: 0, maxLevel: 20},
    label: 'Bard'
  },
  {
    value: {id: 'cler', level: 0, maxLevel: 20},
    label: 'Cleric'
  },
  {
    value: {id: 'drud', level: 0, maxLevel: 20},
    label: 'Druid'
  },
  {
    value: {id: 'fght', level: 0, maxLevel: 20},
    label: 'Fighter'
  },
  {
    value: {id: 'monk', level: 0, maxLevel: 20},
    label: 'Monk'
  },
  {
    value: {id: 'pldn', level: 0, maxLevel: 20},
    label: 'Paladin'
  },
  {
    value: {id: 'rngr', level: 0, maxLevel: 20},
    label: 'Ranger'
  },
  {
    value: {id: 'rogu', level: 0, maxLevel: 20},
    label: 'Rogue'
  },
  {
    value: {id: 'sorc', level: 0, maxLevel: 20},
    label: 'Sorcerer'
  },
  {
    value: {id: 'wzrd', level: 0, maxLevel: 20},
    label: 'Wizard'
  },
]



// Character Sheets Structure types
export enum StructureComponentType {
  Region,
  Grid,
  TextInput,
  NumberInput,
  CheckInput,
  Calculated,
  DropDown,
  Image,
  MultiSelectPill,
  DnDAttribute
}

export type StructureComponentSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export type StructureComponentDirection = 'horizontal' | 'vertical';
export type StructureLabelPosition = 'top' | 'left' | 'right' | 'bottom';
export type StructureLookupClassValue = {id: string, level: number, maxLevel: number};

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
  minValue?: number;
}

export interface StructureComponent {
  id: string;
  key: string;
  label?: string;
  titles?: Array<string>;
  subLabel?: string;
  type: StructureComponentType;
  settings: StructureComponentOptions;
  options?: Array<LookupDto<string | number | StructureLookupClassValue>>;
  children?: Array<StructureComponent>;
}

export const mockSheet: SheetBase = {
  id: 'id',
  system: GameSystem.DungeonsAndDragons,
  structure: [{
    id: 'header-1',
    key: 'firstRow',    
    type: StructureComponentType.Region,
    settings: {
      size: '12'
    },
    children: [{
      id: 'id-1',
      key: 'header',
      label: 'Header',
      type: StructureComponentType.Region,
      settings: {
        direction: 'horizontal',
        size: '8'
      },
      children: [
        {
          id: 'id-2',
          key: 'name',
          label: 'Name',
          type: StructureComponentType.TextInput,
          settings: {
            boldLabel: true,
            size: '12'
          },
        },
        {
          id: 'class-1',
          key: 'classes',
          label: 'Classes/Level',
          type: StructureComponentType.MultiSelectPill,
          options: classes,
          settings: { size: '8'}
        },
        {
          id: 'charLevel',
          key: 'charLevel',
          label: 'Character Level',
          type: StructureComponentType.Calculated,
          settings: { 
            size: '4'
          }
        },
        {
          id: 'id-3',
          key: 'Race',
          label: 'Race',
          type: StructureComponentType.TextInput,
          settings: {}
        },
        {
          id: 'id-4' ,
          key: 'alignment',
          label: 'Alignment',
          type: StructureComponentType.DropDown,
          options: alignments,
          settings: { size: '2'}
        },
        {
          id: 'id-5',
          key: 'description',
          label: 'Description',
          type: StructureComponentType.TextInput,
          settings: { 
            size: '12'
          }
        }
      ]
    },
    {
      id: 'id-2-1',
      key: 'pictureArea',
      type: StructureComponentType.Region,
      settings: {
        size: '4'
      },
      children: [{
        id: 'pic-1',
        key: 'picture',
        type: StructureComponentType.Image,
        settings: {}
      }]
    }]
  },
  {
    id: 'attributesAndCombat',
    key: 'attributesAndCombat',
    type: StructureComponentType.Region,
    settings: {
      size: '6'
    },
    children: [
      {
        id: 'attributes',
        key: 'attributes',
        titles: ['Ability Name', 'Ability Score', 'Ability Modifier', 'Temp Adjustment', 'Temp Modifier'],
        type: StructureComponentType.Region,
        settings: {
          size: '6',
          direction: 'horizontal'
        },
        children: [{
          id: 'strength',
          key: 'Strength',
          label: "STR",
          subLabel: "Strength",
          type: StructureComponentType.DnDAttribute,
          settings: {
            minValue: 3
          }      
        }, {
          id: 'dexterity',
          key: 'Dexterity',
          label: "DEX",
          subLabel: "Dexterity",
          type: StructureComponentType.DnDAttribute,
          settings: {
            minValue: 3
          }      
        },{
          id: 'constitution',
          key: 'Constitution',
          label: "CON",
          subLabel: "Constitution",
          type: StructureComponentType.DnDAttribute,
          settings: {
            minValue: 3
          }      
        },{
          id: 'intelligence',
          key: 'Intelligence',
          label: "INT",
          subLabel: "Intelligence",
          type: StructureComponentType.DnDAttribute,
          settings: {
            minValue: 3
          }      
        },{
          id: 'wisdom',
          key: 'Wisdom',
          label: "WIS",
          subLabel: "Wisdom",
          type: StructureComponentType.DnDAttribute,
          settings: {
            minValue: 3
          }      
        },{
          id: 'charisma',
          key: 'Charisma',
          label: "CHA",
          subLabel: "Charisma",
          type: StructureComponentType.DnDAttribute,
          settings: {
            minValue: 3
          }      
        }]
      },
      {
      id :'combat',
      key: 'combat',
      type: StructureComponentType.Region,
      settings: {
        size: '6',
      }
      }]
  }]
}
