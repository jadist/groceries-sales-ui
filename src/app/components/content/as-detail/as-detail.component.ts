import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Column } from '../as-table/as-table.model';
import { AsDetailModel } from './as-detail.model';

@Component({
  selector: 'app-as-detail',
  templateUrl: './as-detail.component.html',
  styleUrls: ['./as-detail.component.css'],
})
export class AsDetailComponent<T> implements OnInit {
  @Input() detailInput: AsDetailModel = {} as AsDetailModel;

  @Input()
  tableColumns: Array<Column> = [];

  @Input()
  rowData: T = {} as T;

  readData: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(typeof this.rowData);

    this.readData = this.tableColumns.map((col) => {
      return this.rowData[col.columnDef.toString() as keyof T];
    }) as string[];

    console.log(this.detailInput.BackUrl);
  }

  backClick() {
    this.router.navigate(this.detailInput.BackUrl);
  }
}
