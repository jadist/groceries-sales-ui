import { Component } from '@angular/core';

import { SidebarModel } from './sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  selectedMenuItem: SidebarModel | null = null;

  sidebarMenu: SidebarModel[] = [
    {
      MenuItem: {
        Icon: 'home',
        Name: 'Home',
        Value: 'home',
        Description: '',
        UrlSlug: ['/'],
      },
    },
    {
      MenuItem: {
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
    },
  ];

  selectSidebarItem(value: string) {
    const selectedItem = this.sidebarMenu.filter(
      (item) => item.MenuItem.Value === value
    );

    if (selectedItem.length > 0) {
      if (selectedItem[0].MenuItem.Child) {
        this.selectedMenuItem = selectedItem[0];
      }
    }
  }

  backToParentSidebar() {
    this.selectedMenuItem = null;

    console.log(this.selectedMenuItem);
  }
}
