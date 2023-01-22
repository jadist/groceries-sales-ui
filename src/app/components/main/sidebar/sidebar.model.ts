export interface MenuItem {
  Icon: string;
  Name: string;
  Value: string;
  Description: string;
  UrlSlug: string[];
  Child?: {
    Icon: string;
    Name: string;
    Value: string;
    Description: string;
    UrlSlug: string[];
  }[];
}

export interface SidebarModel {
  Header: {
    Title: string;
    Description: string;
  };
  MenuItem: MenuItem[];
}
