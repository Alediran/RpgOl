import EntityDto from "./Base/EntityDto";
import NamedDto from "./Base/NamedDto";

export interface CreateGroupDto extends NamedDto {
  boardId: string;
}

export interface UpdateGroupDto extends EntityDto, CreateGroupDto {}
export interface GroupDto extends EntityDto, CreateGroupDto {}