import { DataTableSortOrderType } from "primereact/datatable";
import PagedResultRequestDto from "./PagedResultRequestDto";

export default interface PagedAndSortedResultRequestDto  extends PagedResultRequestDto {
  sortField?: string;
  sortOrder?: DataTableSortOrderType;
}