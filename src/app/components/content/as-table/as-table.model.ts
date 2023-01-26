export interface Column {
  columnDef: string;
  header: string;
  cell: Function;
  richTextString?: boolean;
  hidden?: boolean;
  id?: boolean;
}

export interface PaginatorModel {
  RowCount: number;
  RowPerPage: number;
  CurrentPageIndex: number;
}
