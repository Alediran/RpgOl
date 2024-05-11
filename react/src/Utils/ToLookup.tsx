import Localize from "Components/Localize/Index";
import { NamedEntity } from "Types/Base/Lookup";
import LookupDto from "Types/Output/LookupDto";

export default function mapEnumToLookup<T extends {}>(enumToDeconstruct: T): Array<LookupDto<number>> {  
  return (Object.keys(enumToDeconstruct)
    .filter((v) => isNaN(Number(v))) as Array<keyof typeof enumToDeconstruct>)
    .map((value, index) => ({ value: index, label: value.toString()}));
};

export function mapEnumToLocalizedLookup<T extends {}>(enumToDeconstruct: T): Array<LookupDto<number>> {  
  return (Object.keys(enumToDeconstruct)
    .filter((v) => isNaN(Number(v))) as Array<keyof typeof enumToDeconstruct>)
    .map((value, index) => ({ value: index, label: Localize.getString(value.toString()) || value.toString()}));
};


export function mapEntityToLookup<T extends NamedEntity>(entities?: Array<T>): Array<LookupDto<string>> {
  if (entities) return Array.from(entities).sort((a, b) => a.name.localeCompare(b.name)).map((entity) => ({ value: entity.id, label: entity.name}));
  return [];
}
