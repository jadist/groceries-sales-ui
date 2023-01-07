export interface MainPanelTableModel {
  version?: {
    '1'?: any;
  };
  column: {
    name: string;
    displayed: string;
  }[];
  row: string[][];
}
