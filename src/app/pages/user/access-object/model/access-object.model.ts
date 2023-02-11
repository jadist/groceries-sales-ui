import { Column } from 'src/app/components/content/as-table/as-table.model';
import { PagesIdentityModel } from 'src/app/pages/models/pages.model';

export const ColumnModel: Column[] = [
  {
    ColumnDef: 'Id',
    Header: 'Id',
    Cell: (element: Record<string, any>) => `${element['Id']}`,
    id: true,
    Readonly: true,
  },
  {
    ColumnDef: 'AccessCode',
    Header: 'Access Code',
    Cell: (element: Record<string, any>) => `${element['AccessCode']}`,
  },
  {
    ColumnDef: 'ObjectName',
    Header: 'Object Name',
    Cell: (element: Record<string, any>) => `${element['ObjectName']}`,
  },
  {
    ColumnDef: 'ObjectDescription',
    Header: 'Object Description',
    Cell: (element: Record<string, any>) => `${element['ObjectDescription']}`,
  },
  {
    ColumnDef: 'DocVersion',
    Header: 'Doc Version',
    Cell: (element: Record<string, any>) => `${element['DocVersion']}`,
    Hidden: true,
  },
];

export const IdentityValue: PagesIdentityModel = {
  Component: {
    ToolbarTitle: 'Access Object',
  },
  Firebase: {
    Functions: {
      SearchModuleName: 'jktAccessObjectSearchView',
    },
    Firestore: {
      RootCollectionName: 'ACCESS-OBJECT',
    },
  },
};
