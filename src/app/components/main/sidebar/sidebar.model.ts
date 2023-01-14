export interface SidebarModel {
  MenuItem: {
    Icon: string;
    Name: string;
    Description: string;
    UrlSlug: string[];
    Child?: {
      Icon: string;
      Name: string;
      Description: string;
      UrlSlug: string[];
    }[];
  };
}
