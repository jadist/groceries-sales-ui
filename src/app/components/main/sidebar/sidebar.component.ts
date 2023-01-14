import { Component } from '@angular/core';

import { SidebarModel } from './sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  sidebarMenu: SidebarModel[] = [
    {
      MenuItem: {
        Icon: 'home',
        Name: 'Home',
        Description: '',
        UrlSlug: ['/'],
      },
    },
    {
      MenuItem: {
        Icon: 'person',
        Name: 'Person',
        Description: 'See more',
        UrlSlug: [''],
        Child: [
          {
            Icon: 'policy',
            Name: 'User Role',
            Description: '',
            UrlSlug: ['/', 'user-role'],
          },
          {
            Icon: 'person',
            Name: 'User List',
            Description: '',
            UrlSlug: ['/', 'user-list'],
          },
        ],
      },
    },
  ];
}
