import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { MainPanelTableModel } from '../../../model/root/main-panel/property';
import { MainPanelDisplayService } from '../../../services/main-panel/main-panel-display.service';

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
    private tableService: MainPanelDisplayService
  ) {}

  ngOnInit(): void {
    this.tableServiceSub = this.tableService
      .getDataAsTable()
      .subscribe((item: MainPanelTableModel) => {
        this.tableData = item;
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
      .navigate([this.tableData?.UrlParamName, selectedId])
      .then((succeed) => {
        console.log('Go to next route');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
