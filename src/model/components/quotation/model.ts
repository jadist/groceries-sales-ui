export interface QuotationModel {
  QuotationNo: string;
  QuotationTitle: string;
  QuotationNotes: string;
  TotalAmount: number;
  SaleNo?: string;
  QuotationDetailNo?: string[];
}
