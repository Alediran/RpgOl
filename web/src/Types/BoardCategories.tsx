import FullAuditedEntityDto from "Types/FullAuditedEntityDto";

export interface CreateBoardCategoryDto {
  name: string;
  description: string;
}

export interface BoardCategoryDto extends FullAuditedEntityDto, CreateBoardCategoryDto {}