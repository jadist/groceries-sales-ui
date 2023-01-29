export interface UserRoleDocumentModel {
  Id: string;
  Data: {
    UniqueCode: string;
    RoleName: string;
    RoleDescription: string;
    DocVersion: string;
  };
}
