/**
 * On defining Column Model, please refer to "src/app/components/content/as-table/as-table.model.ts"
 */
export const ColumnModel: any = [
  {
    ColumnDef: 'Id',
    Header: 'Id',
    Cell: (element: Record<string, any>) => `${element['Id']}`,
    id: true,
    Readonly: true,
  },
  {
    ColumnDef: 'UniqueCode',
    Header: 'Unique Code',
    Cell: (element: Record<string, any>) => `${element['UniqueCode']}`,
  },
  {
    ColumnDef: 'RoleName',
    Header: 'Role Name',
    Cell: (element: Record<string, any>) => `${element['RoleName']}`,
  },
  {
    ColumnDef: 'RoleDescription',
    Header: 'Role Description',
    Cell: (element: Record<string, any>) => `${element['RoleDescription']}`,
    RichTextString: true,
  },
  {
    ColumnDef: 'DocVersion',
    Header: 'Doc Version',
    Cell: (element: Record<string, any>) => `${element['DocVersion']}`,
    Hidden: true,
  },
];

export const IdentityValue: any = {
  ToolbarTitle: 'User Role',
  Functions: {
    SearchModuleName: 'jktUserRoleSearchView',
  },
  Firestore: {
    RootCollectionName: 'USER-ROLE',
  },
};
