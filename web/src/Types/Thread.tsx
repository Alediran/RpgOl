import EntityDto from "./Base/EntityDto";
import FullAuditedEntityDto from "./Base/FullAuditedEntityDto";
import NamedDto from "./Base/NamedDto";

export interface CreateThreadDto extends NamedDto {
  boardId: string;
  groupId: string;
}

export interface UpdateThreadDto extends EntityDto, CreateThreadDto {}
export interface ThreadDto extends FullAuditedEntityDto, CreateThreadDto {}