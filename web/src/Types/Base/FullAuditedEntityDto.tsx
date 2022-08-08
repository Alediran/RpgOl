import AuditedEntityDto from "Types/Base/AuditedEntityDto";

export default interface FullAuditedEntityDto extends AuditedEntityDto{
  isDeleted: boolean;
  deleterId: string;
  deletionTime: Date
}