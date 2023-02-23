import { Column } from 'src/app/components/content/as-table/as-table.model';
import { PagesIdentityModel } from 'src/app/pages/models/pages.model';

// interface UserListDocumentModel {
//   UserRoleReference: string;
//   Username: string;
//   EmailAddress: string;
//   FullName: string;
//   PhoneNo: number;
//   DocVersion: number;
// }

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
    ColumnDef: 'Username',
    Header: 'Username',
    Cell: (element: Record<string, any>) => `${element['Username']}`,
    OrderIndex: 2,
    Required: true,
  },
  {
    ColumnDef: 'EmailAddress',
    Header: 'Email Address',
    Cell: (element: Record<string, any>) => `${element['EmailAddress']}`,
    OrderIndex: 3,
    Required: true,
  },
  {
    ColumnDef: 'FullName',
    Header: 'Full Name',
    Cell: (element: Record<string, any>) => `${element['FullName']}`,
    OrderIndex: 4,
  },
  {
    ColumnDef: 'PhoneNo',
    Header: 'Phone No',
    Cell: (element: Record<string, any>) => `${element['PhoneNo']}`,
    OrderIndex: 5,
    ValueType: 'number',
    Required: true,
  },
  {
    ColumnDef: 'UserRoleReference',
    Header: 'User Role Reference',
    Cell: (element: Record<string, any>) => `${element['UserRoleReference']}`,
    OrderIndex: 6,
    ValueType: 'options',
    Options: {
      List: [],
      RemoteUrl: {
        FirestoreCollectionName: 'USER-ROLE',
      },
    },
    Required: true,
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
