import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Column } from '../as-table/as-table.model';
import { AsDetailModel } from './as-detail.model';

@Component({
  selector: 'app-as-detail',
  templateUrl: './as-detail.component.html',
  styleUrls: ['./as-detail.component.css'],
})
export class AsDetailComponent<T> implements OnInit, OnChanges {
  @Input() detailInput: AsDetailModel = {} as AsDetailModel;

  @Input() tableColumns: Array<Column> = [];

  @Input() rowData: T = {} as T;

  unifiedReadData: {
    Column: Column;
    Value: string;
  }[] = [];

  edit: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    try {
      this.edit = false;

      const currValue: [string, T][] = Object.entries<T>(
        changes['rowData'].currentValue
      );

      this.unifiedReadData = currValue.map((read) => ({
        Column: this.tableColumns.filter((col) => col.columnDef === read[0])[0],
        Value: read[1] as string,
      }));
    } catch {}
  }

  saveEdit() {
    this.edit = false;
  }
}
