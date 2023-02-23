const OptionType = {
  String: 'string',
  Number: 'number',
  Boolean: 'boolean',
  RichText: 'richtext',
  Options: 'options',
} as const;

export interface Column {
  ColumnDef: string;
  Header: string;
  Cell: Function;
  Hidden?: boolean;
  id?: boolean;
  Readonly?: boolean;
  OrderIndex: number;
  ValueType?: typeof OptionType[keyof typeof OptionType];
  Options?: {
    List: {
      name: string;
      value: string | number | boolean;
    }[];
    RemoteUrl?: {
      [key: string]: string;
    };
  };
  Required?: boolean;
}

export interface PaginatorModel {
  RowCount: number;
  RowPerPage: number;
  CurrentPageIndex: number;
}
