import { Column } from 'src/app/components/content/as-table/as-table.model';
import { PagesIdentityModel } from 'src/app/pages/models/pages.model';

export const ColumnModel: Column[] = [
  {
    ColumnDef: 'Id',
    Header: 'Id',
    Cell: (element: Record<string, any>) => `${element['Id']}`,
    id: true,
    Readonly: true,
    OrderIndex: 1,
  },
  {
    ColumnDef: 'QuotationNo',
    Header: 'Quotation No',
    Cell: (element: Record<string, any>) => `${element['QuotationNo']}`,
    OrderIndex: 2,
  },
  {
    ColumnDef: 'QuotationTitle',
    Header: 'Quotation Title',
    Cell: (element: Record<string, any>) => `${element['QuotationTitle']}`,
    OrderIndex: 3,
  },
  {
    ColumnDef: 'QuotationDescription',
    Header: 'Quotation Description',
    Cell: (element: Record<string, any>) => `${element['QuotationDescription']}`,
    OrderIndex: 4,
  },
  {
    ColumnDef: 'CreatedDateTime',
    Header: 'Created At',
    Cell: (element: Record<string, any>) => `${element['CreatedDateTime']}`,
    OrderIndex: 5,
  },
  {
    ColumnDef: 'ModifiedDateTime',
    Header: 'Modified At',
    Cell: (element: Record<string, any>) => `${element['ModifiedDateTime']}`,
    OrderIndex: 6,
  },
  {
    ColumnDef: 'DocVersion',
    Header: 'Doc Version',
    Cell: (element: Record<string, any>) => `${element['DocVersion']}`,
    Hidden: true,
    OrderIndex: 7,
    ValueType: 'number',
  },
];

export const IdentityValue: PagesIdentityModel = {
  Component: {
    ToolbarTitle: 'Quotations',
  },
  Firebase: {
    Functions: {
      SearchModuleName: 'jktSalesTransactionQuotationSearchView',
    },
    Firestore: {
      RootCollectionName: 'Sales-Transaction-Quotation',
    },
  },
};
