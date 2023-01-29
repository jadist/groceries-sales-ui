export interface Column {
  ColumnDef: string;
  Header: string;
  Cell: Function;
  RichTextString?: boolean;
  Hidden?: boolean;
  id?: boolean;
  Readonly?: boolean;
}

export interface PaginatorModel {
  RowCount: number;
  RowPerPage: number;
  CurrentPageIndex: number;
}
