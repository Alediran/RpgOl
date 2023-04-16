import { DataTableSortOrderType } from "primereact/datatable";
import PagedRequestDto from "./PagedRequestDto";

export default interface PagedAndSortedRequestDto  extends PagedRequestDto {
  sortField?: string;
  sortOrder?: DataTableSortOrderType;
}