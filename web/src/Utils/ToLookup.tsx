import Localize from "Components/Localize/Index";
import EntityDto from "Types/Base/EntityDto";
import NamedDto from "Types/Base/NamedDto";
import LookupDto from "Types/Output/LookupDto";

interface NamedEntity extends EntityDto, NamedDto {}

export default function mapEnumToLookup<T>(enumToDeconstruct: T): Array<LookupDto> {  
  return (Object.keys(enumToDeconstruct)
    .filter((v) => isNaN(Number(v))) as Array<keyof typeof enumToDeconstruct>)
    .map((value, index) => ({ value: index, label: value.toString()}));
};

export function mapEnumToLocalizedLookup<T>(enumToDeconstruct: T): Array<LookupDto> {  
  return (Object.keys(enumToDeconstruct)
    .filter((v) => isNaN(Number(v))) as Array<keyof typeof enumToDeconstruct>)
    .map((value, index) => ({ value: index, label: Localize.getString(value.toString()) || value.toString()}));
};


export function mapEntityToLookup<T extends NamedEntity>(entities?: Array<T>): Array<LookupDto> {
  if (entities) return Array.from(entities).sort((a, b) => a.name.localeCompare(b.name)).map((entity) => ({ value: entity.id, label: entity.name}));
  return [];
}
