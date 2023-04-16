import FullAuditedEntityDto from "Types/Base/FullAuditedEntityDto";
import NamedDto from "./Base/NamedDto";

export interface CreateBoardCategoryDto extends NamedDto {
  description: string;
}

export interface BoardCategoryDto extends FullAuditedEntityDto, CreateBoardCategoryDto {}