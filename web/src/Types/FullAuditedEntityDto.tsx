export default interface FullAuditedEntityDto {
  id: string;
  creationTime: Date;
  creatorId: string;
  lastModificationTime: Date;
  lastModifierId: string;
  isDeleted: boolean;
  deleterId: string;
  deletionTime: Date
}