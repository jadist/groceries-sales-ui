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
import { UserRoleDocumentModel } from 'src/app/models/firebase/firestore/user/user-role.model';
import { YesNoDialogComponent } from '../../dialog/yes-no-dialog/yes-no-dialog.component';
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
  @Output() updateEvent = new EventEmitter<UserRoleDocumentModel>();

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

    // const data: UserRoleDocumentModel = {
    //   DocVersion: this.unifiedReadData
    // }
    console.log(this.unifiedReadData);
  }

  deleteItem() {
    const Id = this.unifiedReadData.filter((item) => item.Column.id)[0].Value;

    // this.deleteEvent.emit(Id);

    const dialogRef = this.dialog.open(YesNoDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Deleting record with Id: ', Id);
      }
    });
  }
}
