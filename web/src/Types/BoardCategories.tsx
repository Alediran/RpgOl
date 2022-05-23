import FullAuditedEntityDto from "Types/FullAuditedEntityDto";
import PagedAndSortedResultRequestDto from "./PagedAndSortedResultRequestDto";

export interface CreateBoardCategoryDto {
  name: string;
  description: string;
}

export interface BoardCategoryInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
}

export interface BoardCategoryDto extends FullAuditedEntityDto, CreateBoardCategoryDto {}