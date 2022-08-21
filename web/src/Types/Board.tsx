import EntityDto from "Types/Base/EntityDto";
import FullAuditedEntityDto from "Types/Base/FullAuditedEntityDto";
import { BoardCategoryDto } from "Types/BoardCategories";
import { BoardTypes, GameSystem } from "Types/Enums";
import { GroupDto } from "./Groups";

export interface CreateBoardDto {
  name: string;
  type: BoardTypes;
  gameSystem: GameSystem;
  boardCategories: Array<BoardCategoryDto>;
}

export interface UpdateBoardDto extends EntityDto, CreateBoardDto {}
export interface BoardDto extends FullAuditedEntityDto, CreateBoardDto {
  groups: Array<GroupDto>;
}

export const DefaultBoardDto = () => {
  const value: BoardDto = {
    id: '',
    name: '',
    type: BoardTypes.Game,
    gameSystem: GameSystem.DungeonsAndDragons,
    boardCategories: [],
    groups: [],
    isDeleted: false,
    creationTime: '',
    creatorId: ''

  }

  return value;
}