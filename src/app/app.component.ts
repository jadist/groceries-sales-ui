import { Component, OnInit } from '@angular/core';

import { SidebarService } from './services/layout/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  hideSidebar = true;

  constructor(private sidebar: SidebarService) {}

  ngOnInit(): void {
    this.sidebar
      .getHideSidebarLayout()
      .subscribe((val) => (this.hideSidebar = val));
  }
}
