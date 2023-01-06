import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { PropertyModel as SidebarModel } from '../../../model/root/sidebar/property';
import { PropertyService as SidebarPropertyService } from '../../../services/root/sidebar/property.service';

@Component({
  selector: 'app-sidebar-title-only',
  templateUrl: './title-only.component.html',
  styleUrls: ['./title-only.component.css'],
})
export class TitleOnlyComponent implements OnInit, OnDestroy {
  sidebarDataSubs: Subscription | undefined;

  sidebarData: SidebarModel | undefined;

  constructor(private sidebarPropertyService: SidebarPropertyService) {}

  ngOnInit(): void {
    this.sidebarDataSubs = this.sidebarPropertyService
      .getRootSidebarProperty()
      .subscribe((item: SidebarModel) => {
        this.sidebarData = item;
      });
  }

  ngOnDestroy(): void {
    if (this.sidebarDataSubs) {
      this.sidebarDataSubs.unsubscribe();
    }
  }
}
