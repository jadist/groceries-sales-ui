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
    ColumnDef: 'UniqueCode',
    Header: 'Unique Code',
    Cell: (element: Record<string, any>) => `${element['UniqueCode']}`,
    OrderIndex: 2,
  },
  {
    ColumnDef: 'RoleName',
    Header: 'Role Name',
    Cell: (element: Record<string, any>) => `${element['RoleName']}`,
    OrderIndex: 3,
  },
  {
    ColumnDef: 'RoleDescription',
    Header: 'Role Description',
    Cell: (element: Record<string, any>) => `${element['RoleDescription']}`,
    ValueType: 'richtext',
    OrderIndex: 4,
  },
  {
    ColumnDef: 'DocVersion',
    Header: 'Doc Version',
    Cell: (element: Record<string, any>) => `${element['DocVersion']}`,
    Hidden: true,
    OrderIndex: 5,
    ValueType: 'number',
  },
];

export const IdentityValue: PagesIdentityModel = {
  Component: {
    ToolbarTitle: 'User Role',
  },
  Firebase: {
    Functions: {
      SearchModuleName: 'jktUserRoleSearchView',
    },
    Firestore: {
      RootCollectionName: 'USER-ROLE',
    },
  },
};
