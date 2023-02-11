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
    ColumnDef: 'Username',
    Header: 'Username',
    Cell: (element: Record<string, any>) => `${element['Username']}`,
  },
  {
    ColumnDef: 'EmailAddress',
    Header: 'Email Address',
    Cell: (element: Record<string, any>) => `${element['EmailAddress']}`,
  },
  {
    ColumnDef: 'FullName',
    Header: 'Full Name',
    Cell: (element: Record<string, any>) => `${element['FullName']}`,
  },
  {
    ColumnDef: 'PhoneNo',
    Header: 'Phone No',
    Cell: (element: Record<string, any>) => `${element['PhoneNo']}`,
  },
  {
    ColumnDef: 'UserRoleReference',
    Header: 'User Role Reference',
    Cell: (element: Record<string, any>) => `${element['UserRoleReference']}`,
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
    ToolbarTitle: 'User List',
  },
  Firebase: {
    Functions: {
      SearchModuleName: 'jktUserListSearchView',
    },
    Firestore: {
      RootCollectionName: 'USER-LIST',
    },
  },
};
