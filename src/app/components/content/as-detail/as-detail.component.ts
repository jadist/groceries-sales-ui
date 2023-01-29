import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { YesNoDialogComponent } from '../../dialog/yes-no-dialog/yes-no-dialog.component';
import {
  YesNoDialogEnum,
  YesNoDialogModel,
} from '../../dialog/yes-no-dialog/yes-no-dialog.model';
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

  @Output() deleteEvent = new EventEmitter<string>();
  @Output() updateEvent = new EventEmitter<T>();

  unifiedReadData: {
    Column: Column;
    Value: string;
  }[] = [];

  edit: boolean = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    try {
      this.edit = false;

      const tmpChanges = changes['rowData'].currentValue;

      const currId: [string, T][] = Object.entries<T>(tmpChanges).filter(
        (item) => item[0] === 'Id'
      );
      const currData: [string, T][] = Object.entries<T>(tmpChanges.Data);

      const currValue: [string, T][] = [...currId, ...currData];

      this.unifiedReadData = currValue.map((read) => ({
        Column: this.tableColumns.filter((col) => col.ColumnDef === read[0])[0],
        Value: read[1] as string,
      }));
    } catch {}
  }

  saveItem() {
    this.edit = false;

    // Convert this Data (Array type) into accepted Data (T type)
    const cleanDataArr = this.unifiedReadData.map((item) => {
      if (!item.Column.Hidden) {
        const key = item.Column.ColumnDef;
        const val = (
          document.getElementById(key.toString()) as HTMLInputElement
        ).value;

        return [key, val];
      } else {
        return [item.Column.ColumnDef, item.Value];
      }
    });

    const tObj: T = Object.fromEntries(cleanDataArr);

    this.updateEvent.emit(tObj);
  }

  deleteItem() {
    const selectedRecord = this.unifiedReadData.filter(
      (item) => item.Column.id
    )[0];
    const Id = selectedRecord.Value;

    const data: YesNoDialogModel = {
      Title: 'Deletion Confirmation',
      Message: `Are you sure you want to delete this record?`,
      SecondMessage: `Selected Id: ${Id}`,
      Button: {
        No: {
          Hidden: false,
          Name: 'Cancel',
          Value: YesNoDialogEnum.NO,
        },
        Yes: {
          Color: 'warn',
          Name: 'Delete',
          Value: YesNoDialogEnum.YES,
        },
      },
    };

    const dialogRef = this.dialog.open(YesNoDialogComponent, { data });

    dialogRef.afterClosed().subscribe((result: YesNoDialogEnum) => {
      if (result === YesNoDialogEnum.YES) {
        this.deleteEvent.emit(Id);
      }
    });
  }
}
