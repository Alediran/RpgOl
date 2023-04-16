import EntityDto from "Types/Base/EntityDto";
import FullAuditedEntityDto from "Types/Base/FullAuditedEntityDto";
import { BoardCategoryDto } from "Types/BoardCategories";
import { BoardTypes, GameSystem } from "Types/Enums";
import NamedDto from "./Base/NamedDto";
import { GroupDto } from "./Groups";

export interface CreateBoardDto extends NamedDto {
  type: BoardTypes;
  gameSystem: GameSystem;
  boardCategories: Array<string>;
}

export interface UpdateBoardDto extends EntityDto, Omit<CreateBoardDto, 'boardCategories'> {
  boardCategories: Array<BoardCategoryDto>;
}

export interface BoardDto extends FullAuditedEntityDto, Omit<CreateBoardDto, 'boardCategories'> {
  groups: Array<GroupDto>;
  boardCategories: Array<BoardCategoryDto>;
}

export interface GroupedBoardsDto {
  ownerBoards: Array<BoardDto>;
  followedBoards: Array<BoardDto>;
  generalBoards: Array<BoardDto>;
}

export const NewCreateBoardDto = (): CreateBoardDto => ({
  name: '',
  type: BoardTypes.Game,
  gameSystem: GameSystem.DungeonsAndDragons,
  boardCategories: [],
})



export const DefaultBoardDto = (): BoardDto => ({
  id: '',
  name: '',
  type: BoardTypes.Game,
  gameSystem: GameSystem.DungeonsAndDragons,
  boardCategories: [],
  groups: [],
  isDeleted: false,
  creationTime: '',
  creatorId: ''

})