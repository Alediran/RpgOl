import FullAuditedEntityDto from "Types/Base/FullAuditedEntityDto";

export interface CreateBoardCategoryDto {
  name: string;
  description: string;
}

export interface BoardCategoryDto extends FullAuditedEntityDto, CreateBoardCategoryDto {}