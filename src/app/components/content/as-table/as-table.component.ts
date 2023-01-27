import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';

import { SidebarService } from '../../../services/layout/sidebar/sidebar.service';

import { Column, PaginatorModel } from './as-table.model';

@Component({
  selector: 'app-as-table',
  templateUrl: './as-table.component.html',
  styleUrls: ['./as-table.component.css'],
})
export class AsTableComponent<T> implements OnInit, AfterViewInit {
  //#region Parent-Child Communications
  tableColumns: Array<Column> = [];
  tableData: Array<T> = [];
  showLoadingBar: boolean = false;

  @Output() onPaginatorClick = new EventEmitter<PaginatorModel>();

  @Output() deleteEvent = new EventEmitter<string>();

  //#endregion

  //#region Table Display
  protected displayedColumns: Array<string> = [];
  protected dataSource: MatTableDataSource<T> = new MatTableDataSource();

  protected selectedRowData: T = {} as T;
  //#endregion

  //#region Details
  protected fullSidenav: boolean = false;
  //#endregion

  //#region Paginator
  protected rowCount: number = 0;
  protected rowPerPage: number = 10;
  protected rowPerPageoptions: number[] = [5, 10, 25, 100];
  protected currentPageIndex: number = 0;
  //#endregion

  constructor(private sidebar: SidebarService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {}

  protected applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  rowClick(row: Event) {
    this.selectedRowData = row as T;
  }

  //#region Paginator Method
  setTableValue() {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  getPaginatorValue(): PaginatorModel {
    return {
      RowCount: this.rowCount,
      RowPerPage: this.rowPerPage,
      CurrentPageIndex: this.currentPageIndex,
    };
  }

  setPaginatorValue(value: PaginatorModel) {
    this.rowCount = value.RowCount;
    this.rowPerPage = value.RowPerPage;
  }

  paginatorClicked(event: PageEvent) {
    this.onPaginatorClick.emit({
      CurrentPageIndex: event.pageIndex,
      RowCount: event.length,
      RowPerPage: event.pageSize,
    });
  }

  //#endregion

  //#region Client output
  clientDeleteEvent(Id: string) {
    // Pass the value to This Component's Parent
    this.deleteEvent.emit(Id);
  }
  //#endregion
}
