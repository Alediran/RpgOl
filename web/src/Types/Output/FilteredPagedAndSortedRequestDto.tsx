import PagedAndSortedRequestDto from "./PagedAndSortedRequestDto";

export default interface FilteredPagedAndSortedRequestDto extends PagedAndSortedRequestDto {
  filterText?: string;
}