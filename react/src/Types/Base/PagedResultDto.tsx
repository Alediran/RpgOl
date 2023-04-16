export default interface PagedResultDto<T> {
  items: Array<T>;
  totalCount: number;
}