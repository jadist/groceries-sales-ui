interface Item {
  Icon: string;
  Name: string;
  Value: string;
  Description: string;
  UrlSlug: string[];
}

export interface MenuItem extends Item {
  Child?: Item[];
}

export interface SidebarModel {
  Header: {
    Title: string;
    Description: string;
  };
  MenuItem: MenuItem[];
}
