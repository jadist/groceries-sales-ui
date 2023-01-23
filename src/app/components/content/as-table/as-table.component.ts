import { Component, Input } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

import { SidebarService } from '../../../services/layout/sidebar/sidebar.service';

import { Column } from './as-table.model';

@Component({
  selector: 'app-as-table',
  templateUrl: './as-table.component.html',
  styleUrls: ['./as-table.component.css'],
})
export class AsTableComponent<T> {
  @Input()
  tableColumns: Array<Column> = [];

  @Input()
  tableData: Array<T> = [];

  displayedColumns: Array<string> = [];
  dataSource: MatTableDataSource<T> = new MatTableDataSource();

  selectedRowData: T = {} as T;

  fullSidenav: boolean = false;

  constructor(private sidebar: SidebarService) {}

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  rowClick(row: Event) {
    this.selectedRowData = row as T;
  }
}
