import CreationAuditedEntityDto from "Types/Base/CreationAuditedEntityDto";

export default interface AuditedEntityDto extends CreationAuditedEntityDto {
  lastModificationTime: Date;
  lastModifierId: string;
}