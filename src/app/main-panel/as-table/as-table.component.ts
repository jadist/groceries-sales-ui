import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { MainPanelTableModel } from '../../../model/root/main-panel/property';
import { PropertyService } from '../../../services/main-panel/property.service';

@Component({
  selector: 'app-as-table',
  templateUrl: './as-table.component.html',
  styleUrls: ['./as-table.component.css'],
})
export class AsTableComponent implements OnInit, OnDestroy {
  tableServiceSub: Subscription = new Subscription();

  tableData: MainPanelTableModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tableService: PropertyService
  ) {}

  ngOnInit(): void {
    this.tableServiceSub = this.tableService
      .getRootSidebarProperty()
      .subscribe((item: MainPanelTableModel) => {
        this.tableData = item;
        // console.log('item:', item);

        // console.log(this.router.url);
      });
  }

  ngOnDestroy(): void {
    if (this.tableServiceSub) {
      this.tableServiceSub.unsubscribe();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  onRowClick(event: Event) {
    const selectedId: string = (
      (event.target as HTMLDivElement).parentNode as HTMLDivElement
    ).id;

    // console.log('id: ', selectedId);

    // console.log('this.route', this.router.url);

    this.router
      .navigate([this.router.url, this.tableData?.urlParamName, selectedId])
      .then((succeed) => {
        console.log('Go to next route');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
