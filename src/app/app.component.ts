import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { PropertyService } from '../services/root/layout/property.service';
import { PropertyModel } from '../model/root/layout/property';
import { SidebarStyleEnum } from '../text/root/sidebar/style';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  rootLayoutProperty: PropertyModel | undefined;
  rootLayoutPropertySub: Subscription = new Subscription();

  importedSidebarStyleEnum = SidebarStyleEnum;

  constructor(private rootLayoutProp: PropertyService) {}

  ngOnInit() {
    this.rootLayoutPropertySub = this.rootLayoutProp
      .getRootLayoutProperty()
      .subscribe((item: PropertyModel) => {
        this.rootLayoutProperty = item;
      });
  }

  ngOnDestroy(): void {
    if (this.rootLayoutPropertySub) {
      this.rootLayoutPropertySub.unsubscribe();
    }
  }
}
