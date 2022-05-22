import AuditedEntityDto from "Types/AuditedEntityDto";

export default interface FullAuditedEntityDto extends AuditedEntityDto{
  isDeleted: boolean;
  deleterId: string;
  deletionTime: Date
}