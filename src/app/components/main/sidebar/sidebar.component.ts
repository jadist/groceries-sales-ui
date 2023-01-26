import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { MenuItem, SidebarModel } from './sidebar.model';
import { DefaultSidebarMenu } from './sidebar.default.data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  selectedMenuItem: MenuItem | null = null;

  defaultSidebarMenu: SidebarModel = DefaultSidebarMenu;

  constructor(private router: Router) {}

  selectSidebarItem(value: string) {
    const selectedItem = this.defaultSidebarMenu.MenuItem.filter(
      (item) => item.Value === value
    );

    if (selectedItem.length > 0) {
      if (selectedItem[0].Child) {
        this.selectedMenuItem = selectedItem[0];
      } else {
        this.navigateToPage(selectedItem[0].UrlSlug);
      }
    }
  }

  backToParentSidebar() {
    this.selectedMenuItem = null;
  }

  navigateToPage(url: string[]) {
    this.router
      .navigate(url)
      .then((_) => {
        // this.selectedMenuItem = null;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
