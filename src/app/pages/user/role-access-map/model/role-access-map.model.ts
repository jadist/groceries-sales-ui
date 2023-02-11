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
    ColumnDef: 'AccessObjectReference',
    Header: 'Access Object Reference',
    Cell: (element: Record<string, any>) =>
      `${element['AccessObjectReference']}`,
    OrderIndex: 2,
  },
  {
    ColumnDef: 'UserRoleReference',
    Header: 'User Role Reference',
    Cell: (element: Record<string, any>) => `${element['UserRoleReference']}`,
    OrderIndex: 3,
  },
  {
    ColumnDef: 'Create',
    Header: 'Create',
    Cell: (element: Record<string, any>) => `${element['Create']}`,
    OrderIndex: 4,
  },
  {
    ColumnDef: 'Read',
    Header: 'Read',
    Cell: (element: Record<string, any>) => `${element['Read']}`,
    OrderIndex: 5,
  },
  {
    ColumnDef: 'Update',
    Header: 'Update',
    Cell: (element: Record<string, any>) => `${element['Update']}`,
    OrderIndex: 6,
  },
  {
    ColumnDef: 'Delete',
    Header: 'Delete',
    Cell: (element: Record<string, any>) => `${element['Delete']}`,
    OrderIndex: 7,
  },
  {
    ColumnDef: 'DocVersion',
    Header: 'Doc Version',
    Cell: (element: Record<string, any>) => `${element['DocVersion']}`,
    Hidden: true,
    OrderIndex: 8,
  },
];

export const IdentityValue: PagesIdentityModel = {
  Component: {
    ToolbarTitle: 'Role Access Map',
  },
  Firebase: {
    Functions: {
      SearchModuleName: 'jktRoleAccessMapSearchView',
    },
    Firestore: {
      RootCollectionName: 'ROLE-ACCESS-MAP',
    },
  },
};
