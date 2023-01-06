import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router,
    private sidebarPropertyService: SidebarPropertyService
  ) {}

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

  sidebarItemClick(link: string) {
    const url = `${this.sidebarData?.urlParamName}/${link}`
      .split('/')
      .filter((item) => item.length > 0)
      .join('/');

    this.router.navigateByUrl(url);
  }
}
