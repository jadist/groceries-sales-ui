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
  SelectedId?: string[];
  UrlParamName?: string;
}
