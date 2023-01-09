export interface MainPanelTableModel {
  Version?: {
    '1'?: any;
  };
  Column: {
    Name: string;
    Displayed: string;
  }[];
  Rows?: {
    Id: string;
    Cols: string[];
  }[];
  UrlParamName?: string;
}

export interface MainPanelSelectedId {
  Id: string[];
}

export interface MainPanelTableGenericModel<T> {
  Version?: {
    '1'?: any;
  };
  UrlParamName?: string;
  Records: T[];
}
