import EntityDto from "Types/EntityDto";

export default interface CreationAuditedEntityDto extends EntityDto {
  creationTime: Date;
  creatorId: string;
}