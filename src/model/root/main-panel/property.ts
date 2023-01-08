export interface MainPanelTableModel {
  version?: {
    '1'?: any;
  };
  column: {
    name: string;
    displayed: string;
  }[];
  rows?: {
    id: string;
    cols: string[];
  }[];
  urlParamName?: string;
}
