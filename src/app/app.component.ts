import { DEFAULT_RESIZE_TIME } from '@angular/cdk/scrolling';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { PropertyService } from '../services/root/layout/property.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  toolbarTitle = '-';
  rootLayoutPropSub: Subscription = new Subscription();

  constructor(private rootLayoutProp: PropertyService) {}

  ngOnInit() {
    this.rootLayoutPropSub = this.rootLayoutProp
      .getToolbarTitle()
      .subscribe((title) => {
        this.toolbarTitle = title;
      });
  }

  ngOnDestroy(): void {
    if (this.rootLayoutPropSub) {
      this.rootLayoutPropSub.unsubscribe();
    }
  }
}
