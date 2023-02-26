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
    ColumnDef: 'ItemName',
    Header: 'Item Name',
    Cell: (element: Record<string, any>) => `${element['ItemName']}`,
    OrderIndex: 2,
    Required: true,
  },
  {
    ColumnDef: 'ItemPrice',
    Header: 'Item Price',
    Cell: (element: Record<string, any>) => `${element['ItemPrice']}`,
    OrderIndex: 3,
    ValueType: 'number',
    Required: true,
  },
  {
    ColumnDef: 'ItemQuantity',
    Header: 'Item Quantity',
    Cell: (element: Record<string, any>) => `${element['ItemQuantity']}`,
    OrderIndex: 4,
    Required: true,
    ValueType: 'number',
  },
  {
    ColumnDef: 'DiscountInPercentage',
    Header: 'Discount Percentage',
    Cell: (element: Record<string, any>) =>
      `${element['DiscountInPercentage']}`,
    OrderIndex: 5,
  },
  {
    ColumnDef: 'TotalAmount',
    Header: 'Total Amount',
    Cell: (element: Record<string, any>) => `${element['TotalAmount']}`,
    OrderIndex: 6,
    Required: true,
  },
  {
    ColumnDef: 'Notes',
    Header: 'Notes',
    Cell: (element: Record<string, any>) => `${element['Notes']}`,
    OrderIndex: 7,
  },
  {
    ColumnDef: 'CreatedDateTime',
    Header: 'Created At',
    Cell: (element: Record<string, any>) => `${element['CreatedDateTime']}`,
    OrderIndex: 8,
    Hidden: true,
    Readonly: true,
  },
  {
    ColumnDef: 'ModifiedDateTime',
    Header: 'Modified At',
    Cell: (element: Record<string, any>) => `${element['ModifiedDateTime']}`,
    OrderIndex: 9,
    Hidden: true,
    Readonly: true,
  },
  {
    ColumnDef: 'DocVersion',
    Header: 'Doc Version',
    Cell: (element: Record<string, any>) => `${element['DocVersion']}`,
    Hidden: true,
    Readonly: true,
    OrderIndex: 10,
    ValueType: 'number',
  },
  {
    ColumnDef: 'ProductReference',
    Header: 'Product Reference',
    Cell: (element: Record<string, any>) => `${element['ProductReference']}`,
    OrderIndex: 11,
    Required: true,
  },
  {
    ColumnDef: 'QuotationReference',
    Header: 'Quotation Reference',
    Cell: (element: Record<string, any>) => `${element['QuotationReference']}`,
    OrderIndex: 11,
    Required: true,
    Hidden: true,
    Readonly: true,
  },
];

export const IdentityValue: PagesIdentityModel = {
  Component: {
    ToolbarTitle: 'Quotation Detail',
  },
  Firebase: {
    Functions: {
      SearchModuleName: 'jktSalesTransactionQuotationDetailSearchView',
    },
    Firestore: {
      RootCollectionName: 'Sales-Transaction-Quotation-Detail',
    },
  },
};
