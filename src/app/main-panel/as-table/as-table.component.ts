import { Component, OnDestroy, OnInit } from '@angular/core';

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

  constructor(private tableService: PropertyService) {}

  ngOnInit(): void {
    this.tableServiceSub = this.tableService
      .getRootSidebarProperty()
      .subscribe((item: MainPanelTableModel) => {
        this.tableData = item;
        // console.log('item:', item);
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
}
