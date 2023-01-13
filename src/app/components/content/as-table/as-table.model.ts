export interface AsTableDataModel {
  Version?: {
    '1': never;
  };
  Column: {
    Value: string[];
    Name: string[];
    Hidden: boolean[];
  };
  Rows?: {
    Id: string;
    Cols: string[];
  }[];
  UrlParamName?: string;
}
