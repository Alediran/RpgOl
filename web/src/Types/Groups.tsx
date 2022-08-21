import EntityDto from "./Base/EntityDto";

export interface CreateGroupDto {
  name: string;
  boardId: string;
}

export interface UpdateGroupDto extends EntityDto, CreateGroupDto {}
export interface GroupDto extends EntityDto, CreateGroupDto {}