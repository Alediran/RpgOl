import EntityDto from "Types/Base/EntityDto";
import FullAuditedEntityDto from "Types/Base/FullAuditedEntityDto";
import { BoardCategoryDto } from "Types/BoardCategories";
import { BoardTypes, GameSystem } from "Types/Enums";

export interface CreateBoardDto {
  name: string;
  type: BoardTypes;
  gameSystem: GameSystem;
  boardCategories: Array<BoardCategoryDto>;
}

export interface UpdateBoardDto extends EntityDto, CreateBoardDto {}
export interface BoardDto extends FullAuditedEntityDto, CreateBoardDto {}