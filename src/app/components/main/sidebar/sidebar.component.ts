import { Component } from '@angular/core';

import { MenuItem, SidebarModel } from './sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  selectedMenuItem: MenuItem | null = null;

  sidebarMenu: SidebarModel = {
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
        UrlSlug: ['/'],
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
    ],
  };

  selectSidebarItem(value: string) {
    const selectedItem = this.sidebarMenu.MenuItem.filter(
      (item) => item.Value === value
    );

    if (selectedItem.length > 0) {
      if (selectedItem[0].Child) {
        this.selectedMenuItem = selectedItem[0];
      }
    }
  }

  backToParentSidebar() {
    this.selectedMenuItem = null;

    console.log(this.selectedMenuItem);
  }
}
