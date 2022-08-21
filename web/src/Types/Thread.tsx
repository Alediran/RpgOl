import EntityDto from "./Base/EntityDto";
import FullAuditedEntityDto from "./Base/FullAuditedEntityDto";

export interface CreateThreadDto {
  name: string;
  boardId: string;
  groupId: string;
}

export interface UpdateThreadDto extends EntityDto, CreateThreadDto {}
export interface ThreadDto extends FullAuditedEntityDto, CreateThreadDto {}