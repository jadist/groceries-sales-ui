export interface Column {
  ColumnDef: string;
  Header: string;
  Cell: Function;
  Hidden?: boolean;
  id?: boolean;
  Readonly?: boolean;
  OrderIndex: number;
  ValueType?: 'string' | 'number' | 'boolean' | 'richtext' | 'options';
  Options?: {
    [key: string]: 'string' | 'number' | 'boolean';
  }[];
}

export interface PaginatorModel {
  RowCount: number;
  RowPerPage: number;
  CurrentPageIndex: number;
}
