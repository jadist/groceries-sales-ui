export interface Column {
  columnDef: string;
  header: string;
  cell: Function;
  url?: string;
  richTextString?: boolean;
  hidden?: boolean;
}
