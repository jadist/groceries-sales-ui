import { SidebarModel } from './sidebar.model';

export const DefaultSidebarMenu: SidebarModel = {
  Header: {
    Title: 'Jadist Home Page',
    Description: 'Jadist Description.. What the hail',
  },
  MenuItem: [
    {
      Icon: 'home',
      Name: 'Home',
      Value: 'home',
      Description: '',
      UrlSlug: ['/', 'home'],
    },
    {
      Icon: 'person',
      Name: 'Users',
      Value: 'users',
      Description: 'User List & Role',
      UrlSlug: [''],
      Child: [
        {
          Icon: 'policy',
          Name: 'User Role',
          Value: 'user-role',
          Description: '',
          UrlSlug: ['/', 'user-role'],
        },
        {
          Icon: 'person',
          Name: 'User List',
          Value: 'user-list',
          Description: '',
          UrlSlug: ['/', 'user-list'],
        },
      ],
    },
    {
      Icon: 'location_on',
      Name: 'Addresses',
      Value: 'address',
      Description: 'Master data of Addresses',
      UrlSlug: [''],
      Child: [
        {
          Icon: 'layers',
          Name: 'Address Type',
          Value: 'address-type',
          Description: '',
          UrlSlug: ['/', 'address-type'],
        },
        {
          Icon: 'map',
          Name: 'Address Component',
          Value: 'address-component',
          Description: '',
          UrlSlug: ['/', 'address-component'],
        },
        {
          Icon: 'person_pin',
          Name: 'User Address',
          Value: 'user-address',
          Description: '',
          UrlSlug: ['/', 'user-address'],
        },
      ],
    },
  ],
};
