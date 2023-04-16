import EntityDto from "Types/Base/EntityDto";

export default interface CreationAuditedEntityDto extends EntityDto {
  creationTime: string;
  creatorId: string;
}