import { Component, Input } from '@angular/core';

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

  @Input() customSidebarMenu: SidebarModel = {} as SidebarModel;

  selectSidebarItem(value: string) {
    const selectedItem = this.defaultSidebarMenu.MenuItem.filter(
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
