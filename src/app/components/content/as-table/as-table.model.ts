const ValueType = {
  Boolean: 'boolean',
  Number: 'number',
  Richtext: 'richtext',
  String: 'string',
} as const;

export interface Column {
  ColumnDef: string;
  Header: string;
  Cell: Function;
  Hidden?: boolean;
  id?: boolean;
  Readonly?: boolean;
  OrderIndex: number;
  ValueType?: typeof ValueType[keyof typeof ValueType];
}

export interface PaginatorModel {
  RowCount: number;
  RowPerPage: number;
  CurrentPageIndex: number;
}
